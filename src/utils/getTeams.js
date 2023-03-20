import { ACADEMYCONFIG } from '../academy.config';

export function getTeams() {
  return new Promise((resolve, reject) => {
    fetch(`${ACADEMYCONFIG.HOST}/api/teams`, {
        method: 'GET',
        headers: {
          "content-type": "application/json",
          "cache-control": "no-cache",
        },
        credentials: "include"
    }).then(res => res.json())
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject('error');
    })
  })
}