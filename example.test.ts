import { describe, expect, it } from "vitest";
import { getServerStuff } from "./server";

describe("example", () => {
  it("server stuff", () => {
    const result = getServerStuff();

    expect(result).toBe("hello");
  });
});
