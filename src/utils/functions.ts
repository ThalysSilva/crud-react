export function normalizePrice(price: string) {
  const priceString = price.toString();
  const normalizedPrice = priceString.slice(0, -2) + ',' + priceString.slice(-2);
  if (priceString.length < 3) return '0' + normalizedPrice;
  return normalizedPrice;
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function normalizeCharacter(character: number | string) {
  if (typeof character === 'string' && character.length) return '00';
  const normalizedCharacter =
    character.toString().length == 1 ? '0' + character.toString() : character.toString();
  return normalizedCharacter;
}

export function reverseString(string: string) {
  return string;
}

export function normalizeDateToString(date: Date) {
  const day = normalizeCharacter(date.getDate());
  const month = normalizeCharacter(date.getUTCMonth() + 1);
  const Year = normalizeCharacter(date.getFullYear());
  const hour = normalizeCharacter(date.getHours());
  const minute = normalizeCharacter(date.getMinutes());
  const second = normalizeCharacter(date.getSeconds());
  return day + '/' + month + '/' + Year + ' ' + hour + ':' + minute + ':' + second;
}
