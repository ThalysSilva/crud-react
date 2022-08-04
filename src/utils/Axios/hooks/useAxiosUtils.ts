import config from '../../../config';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { useToast } from '../../../hooks/useToast';
import { CustomAxiosError } from '../types';

export default function useAxiosUtils() {
  const { signOut } = useAuthContext();
  const { dispatchToast } = useToast();
  function handleAxiosError(error: unknown) {
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

    dispatchToast({ title: 'Error !!', description: messageError });
    if (messageError === 'Token esta expirado') {
      signOut();
      return { messageError };
    }

    return { messageError };
  }

  return { handleAxiosError };
}
