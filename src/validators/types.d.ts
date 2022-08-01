export type Primitive = boolean | number | string | object | File;

export type validationResponse = {
  isValid: boolean;
  reason?: string;
};

export type ValidatorFunction = (...x: any) => validationResponse;