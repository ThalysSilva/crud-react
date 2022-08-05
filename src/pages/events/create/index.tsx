import React from 'react';

import WithAuthentication from '../../../components/shared/WithAuthentication';
import useCreateEvent from '../../../hooks/pageCreateEvent/useCreateEvent';
import { EventView } from '../../../components/shared/EventView';

function PageCreateEvent() {
  const { setDateEvent, handleSubmit, isLoading, dateEvent } = useCreateEvent();

  return (
    <div className={'flex flex-col w-screen h-screen sm:w-[470px]  items-center justify-center '}>
      <EventView
        isLoadingSubmit={isLoading}
        onSubmit={handleSubmit}
        setDate={setDateEvent}
        date={dateEvent}
        description={''}
        title={''}
      />
    </div>
  );
}

export default WithAuthentication(PageCreateEvent);
