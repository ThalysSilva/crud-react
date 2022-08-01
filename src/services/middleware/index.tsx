/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import useCookies from '../../hooks/useCookies';

function middleware() {
  const { getCookie } = useCookies();
  function requestAxios(withAuth: boolean | null = null) {
    const request = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      headers: { Accept: 'application/json', 'Access-Control-Allow-Origin': '*' }
    });

    if (withAuth) {
      const token = getCookie('token');
      if (token) {
        request.interceptors.request.use((requestConfig) => {
          requestConfig = { ...requestConfig };
          requestConfig.headers = { ...requestConfig.headers, token: token };
          return requestConfig;
        });
      }
    }

    return request;
  }

  return { requestAxios };
}

export default middleware();
