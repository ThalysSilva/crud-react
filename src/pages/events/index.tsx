import React from 'react';
import PlusIcon from '../../assets/icon/Plus';
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
        <div className={'flex flex-row  sm:border-b-2 mb-4 px-6 pb-1 sm:px-2 sm:mx-4 justify-between items-center'}>
          <div className={' h-10 w-10 sm:hidden'} />
          <H1 className={'border-b-2 sm:border-0'}>{'Eventos'}</H1>
          <button>
            <PlusIcon />
          </button>
        </div>
        <ListEvents />
      </Container>
    </div>
  );
}

export default WithAuthentication(Events);
