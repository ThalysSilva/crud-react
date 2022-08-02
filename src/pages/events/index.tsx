import React from 'react';
import { ListEvents } from '../../components/pageEvent/ListEvents';
import { Button } from '../../components/shared/Button';
import { Container } from '../../components/shared/Container';
import { H1 } from '../../components/shared/Texts';

import WithAuthentication from '../../components/shared/WithAuthentication';

function Events() {
  return (
    <div className={'flex flex-1 min-w-[360px] sm:max-w-[640px]'}>
      <div className={'flex absolute right-5 top-5 h-10 w-fit'}>
        <Button className={'flex p-4'}>{'Efetuar Logout'}</Button>
      </div>
      <Container
        className={
          'flex flex-col mt-[80px] relative flex-1  sm:h-fit  sm:rounded-2xl  min-w-[360px] bg-transparent p-4'
        }
      >
        <H1 className={'flex flex-col mx-auto border-b-2 mb-4 px-2 sm:mx-4'}>{'Eventos'}</H1>
        <ListEvents/>
      </Container>
    </div>
  );
}

export default WithAuthentication(Events);
