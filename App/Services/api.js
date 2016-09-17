// FIXME: much secret ;)
export const apiSecret = 'MTZiZDUwMTEtYTRkMy00ZmQ1LWJjZjUtM2E5Nzg2OGQ3MjFlODViYWIwNTctNWRl';
export const apiOrderRoomId = 'Y2lzY29zcGFyazovL3VzL1JPT00vYjQzM2M3YzAtN2NjNi0xMWU2LTgwNmEtMzc2ZGU1NDM5MjY2';
export const apiMessages = 'https://api.ciscospark.com/v1/messages';

/**
 * Parses the JSON returned
 * @param response response from a network request
 */
const parseJSON = (response) => {
  return response.json();
};

/**
 * Checks if a network request went OK
 * @param response response from a network request
 */
const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response; // all good
  }

  // something went wrong
  throw new Error(response.status);
};

/**
 * Request (GET) an URL, returns a promise
 * @param url the URL we are requesting
 * @param options passed to fetch
 */
export const request = (url, options) => {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(error => ({ error }));
};
