import React from 'react';
import { Button } from '../../components/shared/Button';
import { Container } from '../../components/shared/Container';
import { InputEmail } from '../../components/shared/CustomInputs/InputEmail';
import { InputPassword } from '../../components/shared/CustomInputs/InputPassword';
import { H1 } from '../../components/shared/Texts';

export default function Login() {
  return (
    <Container>
      <div>
        <H1>{'Login'}</H1>
        <div>
          <InputEmail />
          <InputPassword />
        </div>
        <Button>
          <div>{'Entrar'}</div>
        </Button>
      </div>
    </Container>
  );
}
