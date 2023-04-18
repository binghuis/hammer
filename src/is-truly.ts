import { isBoolean } from 'lodash-es';
import { isTrulyEmpty } from './is-truly-empty';

export const isTruly = (value: any) => {
  if (isTrulyEmpty(value) || value === 'false') {
    return false;
  }
  return isBoolean(value);
};
