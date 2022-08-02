import React from 'react';
import { H4 } from '../../shared/Texts';
import { DailyEvent } from '../ListItem/types';

type Props = {
  evento: DailyEvent;
};

export function ListItemContent({ evento }: Props) {
  const { descricao, data, created_at, updated_at } = evento;
  return (
    <div className={'grid grid-cols-5 gap-2'}>
      <H4 className={'col-span-2'}>{descricao}</H4>
      <H4 className={'col-span-1'}>{data}</H4>
      <H4 className={'col-span-1'}>{created_at ? created_at : '- -'}</H4>
      <H4 className={'col-span-1'}>{updated_at ? updated_at : '- -'}</H4>
    </div>
  );
}
