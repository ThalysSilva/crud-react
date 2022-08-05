import React from 'react';
import { normalizeDateToString } from '../../../utils/functions';
import { Text3, Text4, Text5 } from '../../shared/Texts';
import { DailyEvent } from '../ListEventsItem/types';

type Props = {
  evento: DailyEvent;
};

export function ListEventsItemContent({ evento }: Props) {
  const { descricao, data, created_at, updated_at } = evento;
  const [dateString, timeString] = evento.data.split(' ');
  const normalizedDataEvento = dateString.split('-').reverse().join('/') + ' ' + timeString;
  return (
    <div className={'grid grid-rows-2 gap-2'}>
      <div>
        <Text3>{'Descrição'}</Text3>
        <Text4>{descricao}</Text4>
      </div>

      <div className={'flex flex-row justify-between items-end gap-6'}>
        <div className={'max-w-[100px]'}>
          <Text3>{'Data'}</Text3>
          <Text4>{normalizedDataEvento}</Text4>
        </div>

        <div className={'flex flex-col '}>
        
          <div className={'flex flex-col mb-2'}>
            <Text4>{'Criado em'}</Text4>
            <Text5>{created_at ? normalizeDateToString(new Date(created_at)) : '- -'}</Text5>
          </div>

          <div className={'flex flex-col'}>
            <Text4 >{'Atualizado em'}</Text4>
            <Text5>{updated_at ? normalizeDateToString(new Date(updated_at)) : '- -'}</Text5>
          </div>
        </div>
      </div>
    </div>
  );
}
