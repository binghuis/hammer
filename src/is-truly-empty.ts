import { isEmpty } from "lodash-es";
import { PlainObject } from "./types";

export const isTrulyEmpty = (value: PlainObject | string | Array<unknown>) => {
  return isEmpty(value);
};
