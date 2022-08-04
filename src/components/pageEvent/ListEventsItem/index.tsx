import React from 'react';
import PenIcon from '../../../assets/icon/Pen';
import TrashIcon from '../../../assets/icon/Trash';
import { Text2 } from '../../shared/Texts';
import { ListEventsItemContent } from '../ListIEventsItemContent';
import useListEventsItems from './hooks/useListEventsItem';
import { DailyEvent } from './types';

type Props = {
  evento: DailyEvent;
};

export function ListEventsItem({ evento }: Props) {
  const { color, handleEditItem, handleDeleteDailyEvent } =
    useListEventsItems(evento);

  return (
    <div className="flex flex-row h-[220px] sm:h-[245px] w-full items-center bg-gray-700 p-4 rounded-xl mb-6">
      <div className={`flex  h-full w-1 rounded-full mr-4`} style={{ backgroundColor: color }} />
      <div className={'flex flex-1 flex-col'}>
        <div className={'flex flex-row justify-between items-center mb-4'}>
          <Text2>{evento.titulo}</Text2>
          <div className={'flex flex-row justify-center items-start gap-6'}>
            <button onClick={handleEditItem}>
              <PenIcon />
            </button>
            <button type='button' onClick={handleDeleteDailyEvent}>
              <TrashIcon />
            </button>
          </div>
        </div>
        <ListEventsItemContent evento={evento} />
      </div>
    </div>
  );
}
