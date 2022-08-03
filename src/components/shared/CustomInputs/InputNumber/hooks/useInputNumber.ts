import { ChangeEvent } from 'react';

export default function useInputNumber(maxLength: number | undefined) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const targetValue = e.target.value;
    console.log(e.target.value)
    const element = document.getElementById(e.target.id) as HTMLInputElement;

    if (!maxLength) {
      element.value = targetValue.slice(-1);
      return;
    }
    if (element.value.length < maxLength) {
      element.value = targetValue.slice(-1);
      return;
    }
    return;
  }

  return { handleChange };
}
