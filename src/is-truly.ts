import { isTrulyEmpty } from './is-truly-empty';
import { PlainObject } from './types';
import { isArray, isPlainObject, isString } from 'lodash-es';

export const isTruly = (value: unknown) => {
	if (isString(value) || isArray(value) || isPlainObject(value)) {
		return isTrulyEmpty(value as string | PlainObject | unknown[]);
	}
	return Boolean(value);
};
