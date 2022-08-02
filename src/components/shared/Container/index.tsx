import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}
export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={
        className
          ? className
          : `flex min-h-screen flex-1 bg-[#000000ef] justify-start min-w-[390px] sm:justify-center sm:items-center`
      }
    >
      {children}
    </div>
  );
}
