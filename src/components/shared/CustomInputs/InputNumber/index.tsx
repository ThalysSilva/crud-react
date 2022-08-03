import React, { KeyboardEvent } from 'react';

import useInputNumber from './hooks/useInputNumber';
import { Input } from '../../Input';

interface InputNumberProps {
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
  hideMessageValidation?: boolean;
  highlightBorderError?: boolean;
  hideValidationBar?: boolean;
  isRequired?: boolean;
  dataTestId?: string;
  className?: string;
  maxLength?: number;
  value?: number;
  defaultValue?: number | string;
  name?: string;
  min?: number;
  max?: number;
  id?: string;
}

export function InputNumber({
  hideMessageValidation,
  highlightBorderError,
  name = 'inputNumber',
  hideValidationBar,
  isRequired,
  dataTestId,
  className,
  maxLength,
  defaultValue,
  onKeyUp,
  value,
  min,
  max,
  id
}: InputNumberProps) {
  const { handleChange } = useInputNumber(maxLength, min ,max);
  return (
    <Input
      hideMessageValidation={hideMessageValidation}
      highlightBorderError={highlightBorderError}
      hideValidationBar={hideValidationBar}
      dataTestId={dataTestId}
      onChange={handleChange}
      className={className}
      maxLength={maxLength}
      required={isRequired}
      defaultValue={defaultValue}
      onKeyUp={onKeyUp}
      type={'number'}
      value={value}
      name={name}
      min={min}
      max={max}
      id={id}
    />
  );
}
