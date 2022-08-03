import { ChangeEvent } from 'react';

export default function useInputNumber(
  maxLength: number | undefined,
  min: number | undefined,
  max: number | undefined
) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const targetValue = e.target.value;
    const element = document.getElementById(e.target.id) as HTMLInputElement;

    if (!maxLength) {
      element.value = targetValue.slice(-1);
      return;
    }

    if (element.value.length > maxLength) {
      element.value = targetValue.slice(0, maxLength);

      return;
    } else {
      if (max && parseInt(element.value) > max) {
        element.value = max.toString();
      }
      if (min && parseInt(element.value) < min) {
        element.value = min.toString();
      }
    }
    return;
  }

  return { handleChange };
}
