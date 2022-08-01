import { validationResponse } from "./types";
import { validEmailRegex } from "./utils/regex";

export function validateStringNonEmpty(str: string): validationResponse {
  if (typeof str === "string" && str.length > 0) {
    return { isValid: true };
  }

  return { isValid: false, reason: "O campo está vazio" };
}

export function validateRegex(
  data: string,
  regex: RegExp,
  failMessage: string,
): validationResponse {
  if (regex.test(data)) return { isValid: true };
  return { isValid: false, reason: failMessage };
}

export function validateEmail(data: string) {
  if (data.length == 0) return { isValid: true };
  return validateRegex(data, validEmailRegex, "Digite um e-mail válido");
}

export function validateStringIsEqual(dataForValidation: string, dataToCompare: string) {
  if (dataForValidation.length == 0 || dataForValidation === dataToCompare)
    return { isValid: true };
  return { isValid: false, reason: "Os campos não são iguais" };
}

export function validateIsRequired(str: string): validationResponse {
  if (typeof str === "string" && str.length > 0) {
    return { isValid: true };
  }

  return { isValid: false, reason: "Campo obrigatório" };
}
