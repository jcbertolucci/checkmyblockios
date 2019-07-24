import { RESCON_TOKEN } from '../../secrets';

export function getAddress(address) {
  const url = `https://dev-planning-rules-api.azurewebsites.net/api/v2/planning-rules/search/${address}`;
  const header = `Bearer ${RESCON_TOKEN}`;

  return fetch(url, {
    headers: new Headers({
      'Authorization': header,
    })
  })
  .then(res => res.json())
  .then(resJson => resJson.data[0]);
}

export function getPlanningRules(address, code, payload) {
  const url = `https://dev-planning-rules-api.azurewebsites.net/api/v2/planning-rules/lookup/${address}/${code}`;
  const header = `Bearer ${RESCON_TOKEN}`;

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: new Headers({
      'Authorization': header,
    })
  })
  .then(res => res.json())
  .then(resJson => resJson.data);
}