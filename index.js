// https://bun.sh/

const host = "www.dow.com";

Bun.serve({
  port: 36107,
  fetch: async (request) => {
    const res = await fetch(`https://${host}`);
    const content = await res.text();
    return new Response(content);
  },
});

console.log("Run on http://localhost:36107");
