import React from 'react';
import { H2 } from '../../shared/Texts';
import { ListItemContent } from '../ListItemContent';
import { ListItemHeaderContent } from '../ListItemHeader';
import { DailyEvent } from './types';

type Props = {
  evento: DailyEvent;
};

export function ListItem({ evento }: Props) {
  return (
    <div className="flex flex-row min-h-[150px] h-fit w-full px-4 py-2 rounded-xl">
      <div className={`flex  h-full w-1 rounded-full bg-[${evento.cor}]`} />
      <div className="flex flex-1 flex-col">
        <H2>{evento.titulo}</H2>
        <ListItemHeaderContent />
        <ListItemContent evento={evento} />
      </div>
    </div>
  );
}
