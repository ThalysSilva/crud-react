import React, { useEffect, useState } from 'react';
import { H2 } from '../../shared/Texts';
import { ListEventsItemContent } from '../ListItemContent';
import { DailyEvent } from './types';

type Props = {
  evento: DailyEvent;
};

export function ListEventsItem({ evento }: Props) {
  const [color, setColor] = useState('#fff');
  useEffect(() => {
    setColor(evento.cor);
  }, [evento.cor]);
  return (
    <div className="flex flex-row h-[220px] sm:h-[245px] w-full items-center bg-gray-700 p-4 rounded-xl mb-6">
      <div className={`flex  h-full w-1 rounded-full bg-[${color}] mr-4`} />
      <div className={'flex flex-1 flex-col'}>
        <H2 className={'mb-4'}>{evento.titulo}</H2>
        <ListEventsItemContent evento={evento} />
      </div>
    </div>
  );
}
