import React from 'react';

import WithAuthentication from '../../../components/shared/WithAuthentication';
import useCreateEvent from '../../../hooks/pageCreateEvent/useCreateEvent';
import { EventDetail } from '../../../components/shared/EventDetail';

function PageEditEvent() {
  const { setDateEvent, handleSubmit, isLoading, dateEvent } = useCreateEvent();

  return (
    <div className={'flex flex-col w-full h-screen sm:w-[470px]  items-center justify-center '}>
      <EventDetail
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

export default WithAuthentication(PageEditEvent);
