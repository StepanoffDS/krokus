import { test, expect } from "vitest";
import { formatTel } from "../utils";

test("formatTel", () => {
	expect(formatTel("(+371) 259 073 00")).toBe("+37125907300");
});
