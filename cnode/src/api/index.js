const axios = require('axios')
const http = axios.create({
    baseURL: 'https://cnodejs.org/api/v1',
        timeout: 1000,
        headers: { 'X-Custom-Header': 'foobar' }
});

export { http }