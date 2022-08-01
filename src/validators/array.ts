import { validationResponse } from "./types";

export function validateArrayLength(expectedLength: number, array: any[]): validationResponse {
  if (!!array && array.length && array.length === expectedLength) {
    return {isValid: true}
  }

  return {isValid:false, reason: "O tamanho do campo é diferente do atual."};
};

export function validateArrayMaxLength(expectedMaxLength: number, array: any[]): validationResponse {
  if (!!array && array.length && array.length <= expectedMaxLength) {
    return {isValid: true}
  }

  return {isValid:false, reason: "O tamanho do campo é maior que o esperado."};
};

export function validateArrayMinLength(expectedMinLength: number, array: any[]): validationResponse {
  if (!!array && array.length && array.length >= expectedMinLength) {
    return {isValid: true}
  }

  return {isValid:false, reason: "O tamanho do campo é menor que o esperado."};
};

export function validateArrayMaxOrEqualLength(expectedMaxOrEqualLength: number, array: any[]): validationResponse {
  if (!!array && array.length && array.length < expectedMaxOrEqualLength) {
    return {isValid: true}
  }

  return {isValid:false, reason: "O tamanho do campo não é maior que o esperado."};
};

export function validateArrayMinOrEqualLength(expectedMinOrEqualLength: number, array: any[]): validationResponse {
  if (!!array && array.length && array.length > expectedMinOrEqualLength) {
    return {isValid: true}
  }

  return {isValid:false, reason: "O tamanho do campo é menor que o esperado."};
};