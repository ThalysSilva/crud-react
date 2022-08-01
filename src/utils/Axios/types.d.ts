import { AxiosError } from 'axios';

export type CustomAxiosError = AxiosError<{
  message?: string;
}>;
