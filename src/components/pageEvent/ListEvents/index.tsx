import React from 'react';
import LoadingSpinner from '../../../assets/icon/LoadingSpinner';
import { When } from '../../shared/When';
import { ListEventsItem } from '../ListEventsItem';
import useListEvents from './hooks/useListEvents';

export function ListEvents() {
  const { isLoading, listEvents } = useListEvents();
  return (
    <div
      className={
        'flex flex-col sm:justify-between relative w-full min-h-fit h-full sm:w-full rounded-xl min-w-[360px] p-4 overflow-x-hidden'
      }
    >
      <When value={isLoading}>
        <div className={'flex flex-1 my-auto justify-center items-center'}>
          <LoadingSpinner />
        </div>
      </When>
      <When value={!isLoading}>
        {listEvents &&
          listEvents.map((evento, index) => <ListEventsItem key={index} evento={evento} />)}
      </When>
    </div>
  );
}
