import { PlainObject } from './types';
import { isEmpty } from 'lodash-es';

export const isTrulyEmpty = (value: PlainObject | string | Array<unknown>) => {
	return isEmpty(value);
};
