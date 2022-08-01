import { ChangeEvent, FocusEvent, useEffect, useRef, useState } from 'react';

import { validationResponse, ValidatorFunction } from '../../../../validators/types';
import useValidator from '../../../../validators/hooks/useValidator';
import uuid from 'react-uuid';

type Props = {
  inputOnFocus?: (e: FocusEvent<HTMLInputElement, Element>) => void;
  inputOnBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void;
  inputOnChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  validateFunctions?: ValidatorFunction[];
  hideValidationBar?: boolean;
  inputRequired?: boolean;
  minLength?: number;
  maxLength?: number;
  inputId?: string;
};

export default function useInput({
  hideValidationBar,
  validateFunctions,
  inputOnChange,
  inputRequired,
  inputOnFocus,
  inputOnBlur,
  minLength,
  maxLength,
  inputId
}: Props) {
  const fillColor = {
    white: 'bg-primary-white',
    green: 'bg-alerts-green',
    red: 'bg-alerts-red'
  };

  const { multipleValidate, validateIsRequired, validateArrayMinLength, validateArrayMaxLength } =
    useValidator();
  const [validatorColor, setValidatorColor] = useState(fillColor['white']);
  const [validateResponse, setValidateResponse] = useState({
    isValid: true
  } as validationResponse);
  const inputRef = useRef<HTMLInputElement>(null);
  const randomId = uuid();
  const settedValidateFunctions = [] as ValidatorFunction[];
  const id = inputId ?? randomId;

  if (inputRequired) settedValidateFunctions.push(validateIsRequired);
  if (minLength) settedValidateFunctions.push((arr) => validateArrayMinLength(minLength, arr));
  if (maxLength) settedValidateFunctions.push((arr) => validateArrayMaxLength(maxLength, arr));

  if (validateFunctions) settedValidateFunctions.push(...validateFunctions);

  const withValidationBar = !hideValidationBar && settedValidateFunctions.length >= 1;

  function validate() {
    if (!inputRef.current) return;
    const response = multipleValidate(inputRef.current.value, settedValidateFunctions);

    setValidateResponse(response);
    if (response.reason) {
      inputRef.current.setCustomValidity(response.reason);
      setValidatorColor(fillColor['red']);
    } else {
      inputRef.current.setCustomValidity('');
      setValidatorColor(fillColor['green']);
    }
  }

  const onFocus = (event: FocusEvent<HTMLInputElement, Element>) => {
    if (inputOnFocus) inputOnFocus(event);

    setValidateResponse({ isValid: true });
    inputRef.current?.setCustomValidity('');
    setValidatorColor(fillColor['white']);
  };

  const onBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
    if (inputOnBlur) inputOnBlur(event);

    validate();
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (inputOnChange) inputOnChange(event);

    validate();
  };

  useEffect(() => {
    inputRef.current?.addEventListener('invalid', function (event) {
      event.preventDefault();

      validate();
    });
  });

  return {
    withValidationBar,
    validateResponse,
    validatorColor,
    inputRef,
    onChange,
    onFocus,
    onBlur,
    id
  };
}
