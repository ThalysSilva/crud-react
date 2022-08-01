import React from 'react';
import AvatarIcon from '../../assets/icon/Avatar';
import LockIcon from '../../assets/icon/Lock';
import { Button } from '../../components/shared/Button';
import { Container } from '../../components/shared/Container';
import { InputEmail } from '../../components/shared/CustomInputs/InputEmail';
import { InputPassword } from '../../components/shared/CustomInputs/InputPassword';
import { H1, H3 } from '../../components/shared/Texts';

export default function Login() {
  return (
    <Container className={
      'flex flex-col justify-center sm:justify-between relative w-full h-screen sm:h-fit sm:w-[450px] sm:rounded-2xl sm:shadow-2xl sm:border sm:border-white/50 min-w-[360px] bg-transparent p-4'
    } >
      <form className={' w-auto'} onSubmit={() => {}}>
        <div className={'flex w-full justify-center items-center mb-6'}>
          <H1>{'Login'}</H1>
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
        <div className={'mb-20'}/>
        <div className={'flex flex-row justify-end items-end'}>
          <Button dataTestId={'buttonLogin'} isLoading={false}>
            <H3 className={'flex h-10 justify-center items-center'}>{`Entrar`}</H3>
          </Button>
        </div>
      </form>
    </Container>
  );
}
