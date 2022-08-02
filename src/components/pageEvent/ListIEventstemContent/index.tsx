import React from 'react';
import { H3, H4, H5 } from '../../shared/Texts';
import { DailyEvent } from '../ListEventsItem/types';

type Props = {
  evento: DailyEvent;
};

export function ListEventsItemContent({ evento }: Props) {
  const { descricao, data, created_at, updated_at } = evento;
  return (
    <div className={'grid grid-rows-2 gap-2'}>
      <div>
        <H3>{'Descrição'}</H3>
        <H4>{descricao}</H4>
      </div>

      <div className={'flex flex-row justify-between items-center gap-6'}>
        <div className={'max-w-[100px]'}>
          <H3>{'Data'}</H3>
          <H4>{data}</H4>
        </div>

        <div className={'flex flex-col '}>
        
          <div className={'flex flex-col'}>
            <H4>{'Criado em'}</H4>
            <H5>{created_at ? created_at : '- -'}</H5>
          </div>

          <div className={'flex flex-col'}>
            <H4 >{'Atualizado em'}</H4>
            <H5>{updated_at ? updated_at : '- -'}</H5>
          </div>
        </div>
      </div>
    </div>
  );
}
