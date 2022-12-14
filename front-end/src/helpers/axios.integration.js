const axios = require('axios').default;

const makeRequest = async (url, method, data = null, token = null) => {
  const config = {
    url: `/${url}`,
    method,
    data,
    headers: { Authorization: token },
    baseURL: 'http://localhost:3001/',
  };
  const resultAxios = await axios(config);
  if (!resultAxios) return false;
  return resultAxios.data;
};

module.exports = makeRequest;
