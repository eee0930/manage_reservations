import React, { useState } from 'react';

type TTarget = EventTarget & (HTMLInputElement | HTMLTextAreaElement);
type TEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
interface IUseInputFn {
  validator?: (value: string) => boolean;
  callback?: (target: TTarget, value: string) => void;
}
export const useInput = (
  initialValue: string,
  { validator, callback }: IUseInputFn
) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: TEvent) => {
    const { target } = e;
    const { value } = target;
    if (validator !== undefined) {
      let valid = false;
      if (typeof validator === 'function') {
        valid = validator(value);
      }
      if (valid) {
        setValue(value);
      }
    } else {
      setValue(value);
    }
    if (callback !== undefined) {
      callback(target, value);
    }
  };
  return { value, onChange };
};
