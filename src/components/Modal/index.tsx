import React, { ReactNode } from 'react';
import { When } from '../shared/When';

type Props = {
  show: boolean;
  closeOnBackDrop?: boolean;
  closeModal: () => void;
  children: ReactNode;
  className?: string;
};

export function Modal({ show, closeModal, closeOnBackDrop, children, className }: Props) {
  return (
    <When value={show}>
      <div className="animate-fadeInAnimation justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div
          className=" absolute top-0 left-0 w-full h-full bg-gray-900/90"
          onClick={closeOnBackDrop ? closeModal : () => {}}
        />
        <div className={`relative w-auto my-6 mx-auto `}>
          <div
            className={`border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none 
            ${className ? className : ''} `}
          >
            {children}
          </div>
        </div>
      </div>
    </When>
  );
}
