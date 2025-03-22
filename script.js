addEventListener("fetch", (event) => {
  event.respondWith(
    new Response("Hello, World!", { status: 200, headers: { "content-type": "text/plain" } })
  );
});
