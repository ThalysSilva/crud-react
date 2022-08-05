import { useRouter } from 'next/router';
import React from 'react';

import WithAuthentication from '../../../components/shared/WithAuthentication';
import useEditEvent from '../../../hooks/pageEditEvent/useEditEvent';
import { EventView } from '../../../components/shared/EventView';
import LoadingSpinner from '../../../assets/icon/LoadingSpinner';
import { When } from '../../../components/shared/When';
import 'react-calendar/dist/Calendar.css';

function PageEditEvent() {
  const router = useRouter();
  const { eventId } = router.query;
  const {
    isLoadingMutate,
    isLoadingQuery,
    setDateEvent,
    handleSubmit,
    dateEvent,
    evento
  } = useEditEvent(eventId as string);

  return (
    <div className={'flex flex-col w-full h-screen sm:w-[470px]  items-center justify-center '}>
      <When value={isLoadingQuery}>
        <div className={'flex flex-1 my-auto justify-center items-center'}>
          <LoadingSpinner />
        </div>
      </When>
      <When value={!isLoadingQuery}>
        <EventView
          isLoadingSubmit={isLoadingMutate}
          description={evento?.descricao}
          onSubmit={handleSubmit}
          setDate={setDateEvent}
          title={evento?.titulo}
          date={dateEvent}
        />
      </When>
    </div>
  );
}

export default WithAuthentication(PageEditEvent);
