import React from 'react';

import { InputPassword } from '../../components/shared/CustomInputs/InputPassword';
import { InputEmail } from '../../components/shared/CustomInputs/InputEmail';
import { Container } from '../../components/shared/Container';
import { Button } from '../../components/shared/Button';
import { Text1, Text3 } from '../../components/shared/Texts';
import useLogin from '../../hooks/pageLogin/useLogin';
import AvatarIcon from '../../assets/icon/Avatar';
import LockIcon from '../../assets/icon/Lock';

export default function Login() {
  const { handleSubmit, isLoading } = useLogin();
  return (
    <div className={'flex h-screen w-full justify-center items-center'}>
      <Container
        className={
          'flex flex-col justify-center sm:justify-between relative w-full h-screen sm:h-fit sm:w-[450px] sm:rounded-2xl sm:shadow-2xl sm:border sm:border-white/50 min-w-[360px] bg-transparent p-4'
        }
      >
        <form className={' w-auto'} onSubmit={handleSubmit}>
          <div className={'flex w-full justify-center items-center mb-6'}>
            <Text1>{'Login'}</Text1>
          </div>
          <div className={'mb-6'}>
            <InputEmail
              dataTestId={'inputEmailLogin'}
              onLeftIcon={<AvatarIcon />}
              id={'email'}
              isRequired
            />
          </div>
          <div className={'mb-2'}>
            <InputPassword
              dataTestId={'inputPasswordLogin'}
              onLeftIcon={<LockIcon />}
              id={'password'}
              isRequired
              showButton
            />
          </div>
          <div className={'mb-20'} />
          <div className={'flex flex-row justify-end items-end h-10'}>
            <Button dataTestId={'buttonLogin'} isLoading={isLoading}>
              <Text3 className={'flex  justify-center items-center'}>{`Entrar`}</Text3>
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}
