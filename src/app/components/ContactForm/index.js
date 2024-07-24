'use client';

import { useId } from 'react';
import Button from '../Button';

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#E3EFFE] rounded-lg py-6 px-4 flex flex-col gap-4">
      <FormField as="input" name="name" label="Name" />
      <FormField as="email" name="email" label="Email Address" />
      <FormField as="textarea" name="message" label="Message" />
      <Button type="submit" variant="primary">
        Send Message
      </Button>
    </form>
  );
}

const FormField = ({ as = 'input', name, label }) => {
  const id = useId();

  const FormComponent = ({ className }) => {
    switch (as) {
      case 'input':
        return <input className={className} type="text" id={id} name={name} />;
      case 'email':
        return <input className={className} type="email" id={id} name={name} />;
      case 'textarea':
        return (
          <textarea
            className={className}
            type="text"
            id={id}
            name={name}
            rows={10}
          />
        );
      default:
        return;
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-lg font-medium">
        {label}
      </label>
      <FormComponent className="px-4 py-3 border border-[#0577FF] rounded-md" />
    </div>
  );
};
