// eslint-disable-next-line import/extensions
import endpoint from '@/services/endpoind.js';

export default async function getEventService() {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  // myHeaders.append('x-access-token', token);

  const reqOption = {
    method: 'GET',
    headers: myHeaders,
  };
  const methodFetch = await fetch(`${endpoint}/task`, reqOption);
  return methodFetch;
}
