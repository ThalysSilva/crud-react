import {
  validateArrayLength,
  validateArrayMaxLength,
  validateArrayMaxOrEqualLength,
  validateArrayMinLength,
  validateArrayMinOrEqualLength
} from '../array';
import {
  validateStringNonEmpty,
  validateStringIsEqual,
  validateIsRequired,
  validateEmail,
  validateRegex
} from '../string';
import { Primitive, validationResponse, ValidatorFunction } from '../types';

export default function useValidator() {
  function multipleValidate(data: Primitive, validators: ValidatorFunction[]): validationResponse {
    for (const validation of validators) {
      const responseObj = validation(data);
      if (!responseObj.isValid) return responseObj;
    }

    return { isValid: true };
  }

  return {
    validateArrayMinOrEqualLength,
    validateArrayMaxOrEqualLength,
    validateStringNonEmpty,
    validateArrayMaxLength,
    validateArrayMinLength,
    validateStringIsEqual,
    validateArrayLength,
    validateIsRequired,
    multipleValidate,
    validateRegex,
    validateEmail
  };
}
