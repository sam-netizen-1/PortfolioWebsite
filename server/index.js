const HTML_ACCEPT = "text/html";

export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const acceptsHtml = request.headers.get("accept")?.includes(HTML_ACCEPT);

    if (response.status !== 404 || request.method !== "GET" || !acceptsHtml) {
      return response;
    }

    const fallbackUrl = new URL("/", request.url);
    return env.ASSETS.fetch(new Request(fallbackUrl, request));
  }
};
