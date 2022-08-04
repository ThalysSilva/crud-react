import React from 'react';
import PlusIcon from '../../assets/icon/Plus';
import { ListEvents } from '../../components/pageEvent/ListEvents';
import { Button } from '../../components/shared/Button';
import { Container } from '../../components/shared/Container';
import { Text1 } from '../../components/shared/Texts';

import WithAuthentication from '../../components/shared/WithAuthentication';
import useEvents from '../../hooks/pageEvents/useEvents';

function Events() {
  const { handleCreateEventClick, signOut } = useEvents();
  return (
    <div className={'flex flex-1 flex-col min-w-[450px] sm:max-w-[640px] py-5'}>
      <div className={'flex flex-col items-end h-10 w-full mb-5'}>
        <Button onClick={signOut} className={'flex p-4  mr-5 '}>
          {'Efetuar Logout'}
        </Button>
      </div>
      <Container
        className={
          'flex flex-col relative flex-1 max-h-[700px] sm:rounded-2xl  min-w-[450px] bg-transparent p-4'
        }
      >
        <div
          className={
            'flex flex-row  sm:border-b-2 mb-4 px-6 pb-1 sm:px-2 sm:mx-4 justify-between items-center'
          }
        >
          <div className={' h-10 w-10 sm:hidden'} />
          <Text1 className={'border-b-2 sm:border-0'}>{'Eventos'}</Text1>
          <button className={'flex h-10 w-10 justify-center items-center'} type={'button'} onClick={handleCreateEventClick}>
            <PlusIcon />
          </button>
        </div>
        <ListEvents />
      </Container>
    </div>
  );
}

export default WithAuthentication(Events);
