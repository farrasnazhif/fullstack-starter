import assert from "node:assert/strict";
import { test } from "node:test";
import { applyTheme, getTheme } from "../src/lib/theme.ts";

test("server theme defaults safely and restores the saved dark preference", () => {
  assert.equal(getTheme("dark"), "dark");
  for (const value of [undefined, "light", "", "system", "invalid"]) {
    assert.equal(getTheme(value), "light");
  }
});

test("theme changes update the page and persist a cookie usable on refresh", (t) => {
  const previousDocument = Object.getOwnPropertyDescriptor(
    globalThis,
    "document",
  );
  const previousWindow = Object.getOwnPropertyDescriptor(globalThis, "window");
  const page = {
    documentElement: { dataset: { theme: "light" } },
    cookie: "",
  };
  const browser = { location: { protocol: "https:" } };
  Object.defineProperty(globalThis, "document", {
    configurable: true,
    value: page,
  });
  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: browser,
  });
  t.after(() => {
    if (previousDocument)
      Object.defineProperty(globalThis, "document", previousDocument);
    else Reflect.deleteProperty(globalThis, "document");
    if (previousWindow)
      Object.defineProperty(globalThis, "window", previousWindow);
    else Reflect.deleteProperty(globalThis, "window");
  });

  applyTheme("dark");
  assert.equal(page.documentElement.dataset.theme, "dark");
  assert.equal(
    page.cookie,
    "theme=dark; Path=/; Max-Age=31536000; SameSite=Lax; Secure",
  );
  const savedValue = page.cookie.split(";", 1)[0].split("=", 2)[1];
  assert.equal(getTheme(savedValue), "dark");

  browser.location.protocol = "http:";
  applyTheme("light");
  assert.equal(page.documentElement.dataset.theme, "light");
  assert.equal(
    page.cookie,
    "theme=light; Path=/; Max-Age=31536000; SameSite=Lax",
  );
});
