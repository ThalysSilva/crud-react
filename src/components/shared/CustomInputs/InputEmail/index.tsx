import React, { ChangeEvent, ReactElement } from 'react';

import useInputEmail from './hook/useInputEmail';
import { Input } from '../../Input';
import { ValidatorFunction } from '../../../../validators/types';

interface InputEmailProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  validatorFunctions?: ValidatorFunction[];
  hideValidationBar?: boolean;
  onRightIcon?: ReactElement;
  onLeftIcon?: ReactElement;
  isRequired?: boolean;
  placeholder?: string;
  dataTestId?: string;
  emailName?: string;
  className?: string;
  id?: string;
}

export function InputEmail({
  placeholder = 'E-mail',
  emailName = 'email',
  validatorFunctions,
  hideValidationBar,
  onRightIcon,
  isRequired,
  onLeftIcon,
  dataTestId,
  className,
  id
}: InputEmailProps) {
  const { ValidatorFunctionArray } = useInputEmail(validatorFunctions);

  return (
    <Input
      validateFunctions={ValidatorFunctionArray}
      hideValidationBar={hideValidationBar}
      placeholder={placeholder}
      onRightIcon={onRightIcon}
      dataTestId={dataTestId}
      onLeftIcon={onLeftIcon}
      required={isRequired}
      className={className}
      name={emailName}
      maxLength={100}
      type={'email'}
      id={id}
    />
  );
}
