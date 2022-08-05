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
          : `flex min-h-screen w-screen bg-[#000000ef] justify-start min-w-[470px] sm:justify-center `
      }
    >
      {children}
    </div>
  );
}
