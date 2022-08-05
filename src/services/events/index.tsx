import { DailyEvent } from '../../components/pageEvent/ListEventsItem/types';
import config from '../../config';
import middleware from '../middleware';

import {
  PayloadDailyEventUpdate,
  DeleteDailyEventData,
  GetDailyEventData,
  PayloadDailyEvent
} from './types';

export function eventsServices() {
  const { events } = config.apiRoutes;

  async function getListDailyEvents() {
    return await middleware.requestAxios(true).get<GetDailyEventData>(events.dailyEvents);
  }

  async function createDailyEvent(payload: PayloadDailyEvent) {
    return await middleware.requestAxios(true).post<DailyEvent>(events.dailyEvents, payload);
  }

  async function getDailyEventDetail(id: string) {
    const path = events.dailyEventDetail.replace('{id}', id);
    return await middleware.requestAxios(true).get<DailyEvent>(path);
  }

  async function updateDailyEvent(payload: PayloadDailyEventUpdate) {
    const path = events.dailyEventDetail.replace('{id}', payload.id);
    const sendPayload = {
      descricao: payload.descricao,
      titulo: payload.titulo,
      data: payload.data,
      cor: payload.cor
    };
    return await middleware.requestAxios(true).put<DailyEvent>(path, sendPayload);
  }

  async function DeleteDailyEvent(id: string) {
    const path = events.dailyEventDetail.replace('{id}', id);
    return await middleware.requestAxios(true).delete<DeleteDailyEventData>(path);
  }

  return {
    getDailyEventDetail,
    getListDailyEvents,
    updateDailyEvent,
    DeleteDailyEvent,
    createDailyEvent
  };
}
