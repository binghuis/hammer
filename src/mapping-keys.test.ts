import { beforeEach, describe, expect, expectTypeOf, it, vi } from "vitest";
import { Mapper, mappingKeys } from "./mapping-keys";

describe("mappingKeys(data, mapper)", () => {
  let mapper: Mapper;

  beforeEach(() => {
    mapper = vi.fn((key: string) => key.toUpperCase());
  });

  it("exports a function", () => {
    expectTypeOf(mappingKeys).toBeFunction();
  });

  describe("@object: any", () => {
    it("transforms keys of simple object", () => {
      expect(mappingKeys({ one: 1, two: 2 }, mapper)).toEqual({
        ONE: 1,
        TWO: 2,
      });
    });

    it("transforms keys of object with nested objects/arrays", () => {
      expect(
        mappingKeys({ one: 1, obj: { two: 2, three: 3 }, arr: [4, 5] }, mapper),
      ).toEqual({ ONE: 1, OBJ: { TWO: 2, THREE: 3 }, ARR: [4, 5] });
    });

    it("transforms an object with circular references", () => {
      let obj = { one: 1, arr: [2, 3], self: null as any, arr2: null as any };
      obj.self = obj;
      obj.arr2 = obj.arr;

      let exp = { ONE: 1, ARR: [2, 3], SELF: null as any, ARR2: null as any };
      exp.SELF = exp;
      exp.ARR2 = exp.ARR;
      expect(() => mappingKeys(obj, mapper)).toThrowError();
    });
  });

  describe("@mapper(key: string, value: unknown): string", () => {
    it("throws Error if undefined", () => {
      expect(() => mappingKeys({ one: 1 }, undefined as any)).toThrowError();
    });

    it("is called once per object property", () => {
      mappingKeys({ one: 1, obj: { two: 2, three: 3 }, arr: [4, 5] }, mapper);
      expect(mapper).toBeCalledTimes(5);
    });

    it("is called with arguments", () => {
      mappingKeys({ one: 1, arr: [2, 3] }, mapper);
      expect(mapper).toHaveBeenCalledWith("one", 1);
      expect(mapper).toHaveBeenCalledWith("arr", [2, 3]);
    });
  });
});
