import { DailyEvent } from '../../components/pageEvent/ListEventsItem/types';

export type GetDailyEventData = DailyEvent[];

export type PayloadDailyEvent = {
  titulo: string;
  descricao: string;
  data: string;
  cor: string;
};

export type PayloadDailyEventUpdate = {
  id: string;
  descricao: string;
};

export type DeleteDailyEventData = number | {message: string}