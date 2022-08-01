export default function useCookies() {
  function setCookie(keyName: string, storeValue: string, daysToExpire = 1) {
    let expires = '';
    if (daysToExpire) {
      const date = new Date();
      date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = keyName + '=' + (storeValue || '') + expires + '; path=/';
  }
  function getCookie(keyName: string) {
    const allCookies = document.cookie.split('; ');
    const cookieString = allCookies.filter((cookie) => cookie.startsWith(keyName))[0];
    if (cookieString) return cookieString.split('=')[1];

    return '';
  }
  return { setCookie, getCookie };
}
