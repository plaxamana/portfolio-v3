'use client';

import Script from 'next/script';
import { useId } from 'react';
import * as Yup from 'yup';
import { Formik, Form, useField } from 'formik';
import Button from '../Button';
import { toast } from 'react-hot-toast';
import { usePostHog } from 'posthog-js/react';

function configureAhoy() {
  ahoy.configure({
    visitsUrl: 'https://usebasin.com/ahoy/visits',
    eventsUrl: 'https://usebasin.com/ahoy/events',
    page: `${process.env.NEXT_PUBLIC_USEBASIN_FORM_ID}` /* Use your form id here */,
  });
  ahoy.trackView();
  ahoy.trackSubmits();
}

export default function ContactForm() {
  const posthog = usePostHog();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const JSONdata = JSON.stringify(values);
      const endpoint = `https://usebasin.com/f/${process.env.NEXT_PUBLIC_USEBASIN_FORM_ID}`;

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSONdata,
      };

      const res = await fetch(endpoint, options);

      if (res.status === 200) {
        posthog?.capture('message_sent');
        toast.success('Your message has been sent!');
        resetForm();
        console.log('OK');
      }
    } catch (err) {
      toast.error('Unable to send message');
    }
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={Yup.object({
          name: Yup.string().required('Please enter your name'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Please enter your email'),
          message: Yup.string().required('Message cannot be blank'),
        })}
        onSubmit={handleSubmit}
      >
        <Form className="bg-[#E3EFFE] rounded-lg py-6 px-4 flex flex-col gap-4 md:max-w-2xl mx-auto sm:p-8 w-full">
          <FormField type="input" name="name" label="Name" />
          <FormField type="email" name="email" label="Email Address" />
          <FormField type="textarea" name="message" label="Message" rows={10} />
          <Button type="submit" variant="primary">
            Send Message
          </Button>
        </Form>
      </Formik>
      <Script
        src="https://cdn.jsdelivr.net/npm/ahoy.js@0.3.9/dist/ahoy.min.js"
        async
        defer
        onLoad={configureAhoy}
      />
    </>
  );
}

const FormField = ({ label, type, ...props }) => {
  const id = useId();
  const [field, meta] = useField(props);
  const className = `px-4 py-3 border border-[#0577FF] rounded-md  ${
    meta.touched && meta.error ? 'border-red-500 border-2' : 'border-gray-600'
  }`;

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-lg font-medium after:text-red-500 after:content-['_*']"
      >
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea className={className} id={id} {...field} {...props} />
      ) : (
        <input className={className} id={id} {...field} {...props} />
      )}
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-600">{meta.error}</div>
      ) : null}
    </div>
  );
};
