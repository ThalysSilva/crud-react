import { useRouter } from 'next/router';
import { FormEvent } from 'react';
import config from '../../config';
import { PayloadLogin } from '../../services/login/types';
import { useAuthContext } from '../useAuthContext';

export default function useLogin() {
  const { events } = config.webRoutes;
  const router = useRouter();
  const { signInAdm, SignInAdmIsLoading } = useAuthContext();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    const sendPayload: PayloadLogin = {
      email,
      password
    };
    await signInAdm(sendPayload, () => {
      router.push(events.base);
    });
  }

  return {
    isLoading: SignInAdmIsLoading,
    handleSubmit
  };
}
