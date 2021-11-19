import axios from 'axios';

const client = axios.create({ baseURL: 'http://localhost:4000' });

// When you create a new 'hero' list was updated
// And if jQuery and mutations work perfectly
// And if you take a look to tab headers 
// You will see correct url and Authorization: "Bearer token" is attached 
// it's marked as work is done
export default function RequestFN({ ...options }) {
  client.defaults.headers.common.Authtorization = `Bearer token`;
  const onSuccess = (response) => response;
  const onError = (error) => {
    // optionally catch errors and add additional logging here
    return error;
  };
  return client(options).then(onSuccess).catch(onError);
}
