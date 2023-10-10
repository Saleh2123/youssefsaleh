import { assert, expect, test } from "vitest";
import { Result } from "../src/result.js";

test("sanity", () => {
  const unique = Symbol();
  {
    const result = Result.ok<typeof unique, never>(unique).discriminate();
    switch (result.discriminant) {
      case Result.Ok:
        expect(result.$).toBe(unique);
        break;
      default:
        result.discriminant satisfies typeof Result.Err;
        assert.fail();
    }
  }
  {
    const result = Result.err<never, typeof unique>(unique).discriminate();
    switch (result.discriminant) {
      case Result.Ok:
        assert.fail();
      default:
        result.discriminant satisfies typeof Result.Err;
        expect(result.$).toBe(unique);
    }
  }
});
