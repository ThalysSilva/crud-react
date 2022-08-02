import React from 'react';
import { H3 } from '../../shared/Texts';

export function ListItemHeaderContent() {
  return (
    <div className={'grid grid-cols-5 gap-2'}>
      <H3 className={'col-span-2'}>{'Descrição'}</H3>
      <H3 className={'col-span-1'}>{'Data'}</H3>
      <H3 className={'col-span-1'}>{'Criado em'}</H3>
      <H3 className={'col-span-1'}>{'Atualizado em'}</H3>
    </div>
  );
}
