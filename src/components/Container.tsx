import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`w-full mx-auto px-5 sm:px-6 md:px-8 xl:max-w-6xl xl:px-8 2xl:max-w-7xl ${className}`}>
      {children}
    </div>
  );
}
