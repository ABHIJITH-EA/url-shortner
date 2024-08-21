
const PORT = env.process.PORT || 8000
const BASE_API_URL = `http://127.0.0.1:${8000}/api`;

export const API_ENDPOINTS = {
    shortenUrl: `${BASE_API_URL}/short-url`,
    redirectUrl: (shortUrl) => `${BASE_API_URL}/api/${shortUrl}`
};