import React from 'react';
import { ListEventsItem } from '../ListEventsItem';

const evento = {
  id: 4,
  titulo: 'Dia de Tiradentes',
  descricao: 'Dia da celebração da inconfidência mineira.',
  data: '2021-04-21 00:00:00',
  cor: '#fff',
  created_at: null,
  updated_at: null,
  deleted_at: null
};

export function ListEvents() {
  return (
    <div
      className={
        'flex flex-col  sm:justify-between relative w-full h-fit sm:h-fit sm:w-full rounded-xl sm:shadow-2xl  min-w-[360px] p-4 overflow-x-hidden'
      }
    >
      <ListEventsItem evento={evento} />
      <ListEventsItem evento={evento} />
    </div>
  );
}
