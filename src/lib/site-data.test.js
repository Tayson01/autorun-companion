import { describe, expect, test } from "bun:test";
import { PHONE, TEL, WA_NUMBER, WA, waLink } from "./site-data";

describe("Dragodana business contact", () => {
  test("the displayed number matches the supplied 0729847830", () => {
    expect(PHONE.replaceAll(" ", "")).toBe("0729847830");
  });
  test("calls use the Romanian international number", () => {
    expect(TEL).toBe("+40729847830");
  });
  test("WhatsApp uses the same real number", () => {
    expect(WA_NUMBER).toBe("40729847830");
    expect(new URL(WA).pathname).toBe("/40729847830");
    const message = "Pană în Constanța, 205/55 R16";
    const link = new URL(waLink(message));
    expect(link.pathname).toBe("/40729847830");
    expect(link.searchParams.get("text")).toBe(message);
  });
});