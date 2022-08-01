import config from '../../config';
import { CustomAxiosError } from './types';

export function handleAxiosError(error: unknown) {
  const { response } = config.messages;
  let messageError = '';
  const typedError = error as CustomAxiosError;
  const responseData = typedError.response?.data;

  const responseError = (!!responseData && responseData.message) as string;
  if (responseError) {
    messageError = responseError;
  } else {
    messageError = response.error.default;
  }

  return { messageError };
}
