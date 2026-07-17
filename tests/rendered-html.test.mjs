import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

async function render(pathname) {
  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the Bubblelicious Lab home page", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Bubblelicious Lab/);
  assert.match(html, /Your drink/);
  assert.match(html, /experiment\./);
  assert.match(html, /powder-test-tubes\.jpg/);
  assert.match(html, /\(856\) 489-9898/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("renders the animated reviews page", async () => {
  const response = await render("/reviews");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Made by you/);
  assert.match(html, /Loved by many/);
  assert.match(html, /420 Google reviews/);
  assert.match(html, /Previous review/);
  assert.match(html, /Next review/);
});
