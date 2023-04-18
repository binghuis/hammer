import { isEmpty } from 'lodash-es';
import { PlainArray, PlainObject } from './types';

export const isTrulyEmpty = (value: PlainObject | String | PlainArray) => {
  if (value === 'undefined' || value === 'null') {
    return true;
  }
  return isEmpty(value);
};
