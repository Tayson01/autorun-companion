import { describe, expect, test } from "bun:test";
import { PHONE, TEL, WA_NUMBER, WA, waLink } from "./site-data";

describe("Autorun business contact", () => {
  test("the displayed number matches the supplied 0725471288", () => {
    expect(PHONE.replaceAll(" ", "")).toBe("0725471288");
  });
  test("calls use the Romanian international number", () => {
    expect(TEL).toBe("+40725471288");
  });
  test("WhatsApp uses the same real number", () => {
    expect(WA_NUMBER).toBe("40725471288");
    expect(new URL(WA).pathname).toBe("/40725471288");
    const message = "Pană în Constanța, 205/55 R16";
    const link = new URL(waLink(message));
    expect(link.pathname).toBe("/40725471288");
    expect(link.searchParams.get("text")).toBe(message);
  });
});