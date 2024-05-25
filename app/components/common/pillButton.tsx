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
      className={`rounded-full h-16 px-6 py-3 bg-tertiary text-black flex items-center gap-3 justify-between hover:bg-tertiary-lighter transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PillButton;
