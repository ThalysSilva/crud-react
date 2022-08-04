import React from 'react';
import LoadingSpinnerIcon from '../../../assets/icon/LoadingSpinner';
import { When } from '../../shared/When';
import { ListEventsItem } from '../ListEventsItem';
import useListEvents from './hooks/useListEvents';

export function ListEvents() {
  const { isLoading, listEvents } = useListEvents();
  return (
    <div className="relative flex flex-1 ">
      <div
        className={
          'flex flex-col sm:justify-between relative w-full min-h-fit h-full sm:w-full rounded-xl min-w-[360px] '
        }
      >
        <When value={isLoading}>
          <div className={'flex flex-1 my-auto justify-center items-center'}>
            <LoadingSpinnerIcon />
          </div>
        </When>
        <When value={!isLoading}>
          <div className='relative max-h-[650px] overflow-x-hidden  p-6'>
            {listEvents &&
              listEvents.map((evento, index) => <ListEventsItem key={index} evento={evento} />)}
          </div>
        </When>
      </div>
    </div>
  );
}
