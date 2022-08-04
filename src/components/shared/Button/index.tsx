import React, { ReactNode } from 'react';
import LoadingSpinnerIcon from '../../../assets/icon/LoadingSpinner';

type ButtonProps = {
  onClick?: (ev?: React.MouseEvent<HTMLElement>) => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  dataTestId?: string;
  className?: string;
  isDisabled?: boolean;
  isOutlined?: boolean;
  isLoading?: boolean;
  children?: ReactNode;
};

export function Button(props: ButtonProps) {
  return (
    <button
      disabled={props.isDisabled || props.isLoading}
      onClick={props.onClick}
      data-testid={props.dataTestId}
      type={props.type}
      className={
        props.isOutlined
          ? `flex items-center gap-5 px-3 h-10 border border-[#3b74f2] bg-transparent text-[#3b74f2] rounded-xl text-lg font-normal`
          : `flex flex-1 bg-[#3b74f2] text-white items-center justify-center gap-4 h-full rounded-xl  px-3
      hover:bg-[#115bfa] duration-200 ${props.className ? props.className : ''}`
      }
    >
      {props.isLoading ? (
        <>
          <span className="flex flex-row items-center justify-center font-normal text-lg text-primary-white leading-6 h-full">{`Carregando`}</span>
          <LoadingSpinnerIcon />
        </>
      ) : (
        props.children
      )}
    </button>
  );
}
