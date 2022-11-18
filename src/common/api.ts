const get = async (url: string) => {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
  });

  return response.json();
};
const post = async (url: string, params: any) => {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    referrer: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(params),
  });

  return response.json();
};

export default { get, post };
