import { useMutation } from '@tanstack/react-query';
import { PayloadLogin } from '../../services/login/types';
import { loginServices } from '../../services/login';

function handleMutate(payload: PayloadLogin) {
  return loginServices().signInAdm(payload);
}

export default function useSignInAdm() {
  return useMutation(handleMutate);
}
