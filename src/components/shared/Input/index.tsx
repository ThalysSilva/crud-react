import React, { InputHTMLAttributes, ReactElement } from 'react';
import WarningIcon from '../../../assets/icon/Warning';

import { ValidatorFunction } from '../../../validators/types';
import { When } from '../When';
import useInput from './hooks/useInput';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  validateFunctions?: ValidatorFunction[];
  handleRightIconClick?: () => void;
  handleLeftIconClick?: () => void;
  hideMessageValidation?: boolean;
  highlightBorderError?: boolean;
  hideValidationBar?: boolean;
  onRightIcon?: ReactElement;
  onLeftIcon?: ReactElement;
  isRequired?: boolean;
  dataTestId?: string;
  className?: string;
  width?: string | number;
};

export function Input({
  hideMessageValidation,
  handleRightIconClick,
  highlightBorderError,
  handleLeftIconClick,
  hideValidationBar,
  validateFunctions,
  onRightIcon,
  dataTestId,
  onLeftIcon,
  className,
  width,
  ...rest
}: InputProps) {
  const {
    withValidationBar,
    validateResponse,
    validatorColor,
    onChange,
    inputRef,
    onFocus,
    onBlur,
    id
  } = useInput({
    validateFunctions: validateFunctions,
    hideValidationBar: hideValidationBar,
    inputOnChange: rest.onChange,
    inputRequired: rest.required,
    inputOnFocus: rest.onFocus,
    minLength: rest.minLength,
    inputOnBlur: rest.onBlur,
    inputId: rest.id
  });

  const testId = dataTestId ? dataTestId : `inputTestId-${id}`;

  const widthForClassName = typeof width === 'string' ? width : `${width}px`;

  return (
    <div className={'flex flex-col h-full justify-start ' + `w-[${widthForClassName}]`}>
      <div
        className={` 
          flex flex-row py-2  px-4 gap-4 bg-white/10 text-white w-full h-10 rounded-xl  
          ${
            highlightBorderError && !validateResponse.isValid
              ? 'border border-red-800'
              : ''
          } 
          items-center ${className ? className : ''}
        `}
        data-testid={'inputContainer'}
      >
        <When value={onLeftIcon}>
          <span
            className={`
              flex w-4 h-4 justify-center items-center 
              ${handleLeftIconClick ? 'cursor-pointer' : ''}
            `}
            onClick={handleLeftIconClick ? handleLeftIconClick : () => {}}
            data-testid={'leftIcon'}
          >
            {onLeftIcon}
          </span>
        </When>

        <input
          {...rest}
          className={` 
            flex flex-1 w-full bg-transparent text-inherit items-center text-sm sm:text-base
            border-none focus:outline-none autofill:bg-transparent 
          `}
          defaultChecked={rest.onChange ? undefined : rest.checked}
          style={{ textAlign: 'inherit' }}
          data-testid={testId}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={inputRef}
          id={id}
        />

        <When value={onRightIcon}>
          <span
            data-testid={'rightIcon'}
            onClick={handleRightIconClick ? handleRightIconClick : () => {}}
            className={`
              flex w-4 h-4 justify-center items-center
              ${handleRightIconClick ? 'cursor-pointer' : ''}
            `}
          >
            {onRightIcon}
          </span>
        </When>

        <When value={withValidationBar}>
          <div data-testid={'validationBar'} className={'flex h-full '}>
            <span
              className={`
                h-full w-1 rounded-full ${validatorColor}
              `}
            />
          </div>
        </When>
      </div>

      <When value={!hideMessageValidation && validateResponse.reason}>
        <div
          data-testid={'messageValidation'}
          className={'flex  flex-row gap-2 items-center pl-4 h-max mt-2'}
        >
          <WarningIcon />
          <label className={'text-red-800 font-light text-xs leading-4'}>
            {validateResponse.reason}
          </label>
        </div>
      </When>
    </div>
  );
}
