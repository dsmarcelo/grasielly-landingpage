import React from 'react';

const PillButton = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`rounded-full h-16 px-4 py-2 bg-tertiary text-black hover:bg-tertiary-lighter transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PillButton;
