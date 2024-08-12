import clsx from 'clsx';

export default function Typography({ type = 'p', children }) {
  const Component = type;
  const headingTypes = ['h2', 'h3', 'h4', 'h5', 'h6'];

  return (
    <Component
      className={clsx({ 'font-bold text-2xl': headingTypes.includes(type) })}
    >
      {children}
    </Component>
  );
}
