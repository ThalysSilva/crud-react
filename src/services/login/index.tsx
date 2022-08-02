import config from '../../config';
import middleware from '../middleware';

import { PayloadLogin, PostSignInData } from './types';

export function loginServices() {
  const { users } = config.apiRoutes;

  async function signInAdm(payload: PayloadLogin) {
    return await middleware.requestAxios().post<PostSignInData>(users.loginAdm, payload);
  }

  return {
    signInAdm
  };
}
