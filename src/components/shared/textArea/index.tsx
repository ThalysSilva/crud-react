import React, { TextareaHTMLAttributes } from 'react';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  ClassName?: string;
};

export function TextArea({ className, ...rest }: Props) {
  return (
    <textarea
    {...rest}
      className={`flex flex-row py-2  px-4 gap-4 bg-white/10 text-white w-full h-10 rounded-xl focus:outline-none ${className ? className : ''}`}
    />
  );
}
