import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("http://localhost:8080/test/:number", async ({ params }) => {
    console.log("MSW HIT!", params.number);
    return HttpResponse.json({
      id: 999,
      message: "Mocked data from MSW!",
      name: 'Mock user'
    });
  }),
];
