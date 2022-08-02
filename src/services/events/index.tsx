import { DailyEvent } from '../../components/pageEvent/ListEventsItem/types';
import config from '../../config';
import middleware from '../middleware';

import {
  PayloadDailyEventUpdate,
  DeleteDailyEventData,
  GetDailyEventData,
  PayloadDailyEvent,
} from './types';

export function eventsServices() {
  const { events } = config.apiRoutes;

  async function getListEvents() {
    return await middleware.requestAxios(true).get<GetDailyEventData>(events.dailyEvents);
  }

  async function createDailyEvent(payload: PayloadDailyEvent) {
    return await middleware.requestAxios(true).post<DailyEvent>(events.dailyEvents, payload);
  }

  async function getEventDetail(id: string) {
    const path = events.dailyEventDetail.replace('{id}', id);
    return await middleware.requestAxios(true).get<DailyEvent>(path);
  }

  async function updateDetailedEvent(payload: PayloadDailyEventUpdate) {
    const path = events.dailyEventDetail.replace('{id}', payload.id);
    return await middleware
      .requestAxios(true)
      .put<DailyEvent>(path, { descricao: payload.descricao });
  }

  async function removeDetailedEvent(id: string) {
    const path = events.dailyEventDetail.replace('{id}', id);
    return await middleware.requestAxios(true).delete<DeleteDailyEventData>(path);
  }

  return {
    updateDetailedEvent,
    removeDetailedEvent,
    createDailyEvent,
    getEventDetail,
    getListEvents
  };
}
