import React from 'react';
import { ListItem } from '../ListItem';

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
    <div className={
      'flex flex-col  sm:justify-between mt-[80px] relative w-full h-fit sm:h-fit sm:w-full rounded-xl sm:shadow-2xl bg-gray-700  border-0  min-w-[360px] bg-transparent p-4'
    }>
      <ListItem evento={evento} />
    </div>
  );
}
