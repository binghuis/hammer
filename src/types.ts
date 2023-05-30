export interface PlainObject {
  [key: string]: unknown;
}

export type NonPrimitive = PlainObject | PlainObject[];

export type Mapper = (key: string, value: unknown) => string;
