import React, { ChangeEvent, ReactElement } from 'react';
import EyeCloseIcon from '../../../../assets/icon/EyeClose';
import EyeOpenIcon from '../../../../assets/icon/EyeOpen';
import useInputPassword from './hook/useInputPassword';
import { Input } from '../../Input';

interface InputPasswordProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  highlightBorderError?: boolean;
  hideValidationBar?: boolean;
  onLeftIcon?: ReactElement;
  passwordName?: string;
  isRequired?: boolean;
  showButton?: boolean;
  placeholder?: string;
  dataTestId?: string;
  id?: string;
}
export function InputPassword({
  placeholder = 'Senha',
  passwordName = 'password',
  highlightBorderError,
  showButton = false,
  hideValidationBar,
  dataTestId,
  isRequired,
  onLeftIcon,
  onChange,
  id
}: InputPasswordProps) {
  const { handleShowPassword, showPassword } = useInputPassword();

  return (
    <Input
      onRightIcon={showButton ? showPassword ? <EyeOpenIcon /> : <EyeCloseIcon /> : undefined}
      className={` border-primary-white border rounded-xl `}
      highlightBorderError={highlightBorderError}
      handleRightIconClick={handleShowPassword}
      type={showPassword ? `text` : `password`}
      hideValidationBar={hideValidationBar}
      placeholder={placeholder}
      onLeftIcon={onLeftIcon}
      dataTestId={dataTestId}
      required={isRequired}
      name={passwordName}
      onChange={onChange}
      maxLength={100}
      id={id}
    />
  );
}
