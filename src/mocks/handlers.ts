import { http, HttpResponse } from 'msw';

export const handlers = [
    http.post('/result', async () => {
        return HttpResponse.json({
            id: 101,
            message: "Mocked result from MSW!",
            name: "Mock User"
        });
    }),
]