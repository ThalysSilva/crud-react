import React from 'react';
import { ListEvents } from '../../components/pageEvent/List';
import { Button } from '../../components/shared/Button';
import { Container } from '../../components/shared/Container';

import WithAuthentication from '../../components/shared/WithAuthentication';

function Events() {
  return (
    <div>
      <div className={'flex absolute right-5 top-5 h-10 w-fit'}>
        <Button className={'flex p-4'}>{'Efetuar Logout'}</Button>
      </div>
      <Container
        className={
          'flex flex-col mt-[80px] relative w-full  sm:h-fit sm:w-full sm:rounded-2xl sm:border  border-0  min-w-[360px] bg-transparent p-4'
        }
      >
        <ListEvents/>
      </Container>
    </div>
  );
}

export default WithAuthentication(Events);
