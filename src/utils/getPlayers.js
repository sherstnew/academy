import { ACADEMYCONFIG } from '../academy.config';

export function getPlayers(id) {
  let counter = 0;
  return new Promise((resolve, reject) => {
    fetch(`${ACADEMYCONFIG.HOST}/api/players${id ? `?id=${id}` : ''}`, {
        method: 'GET',
        headers: {
          "content-type": "application/json",
          "cache-control": "no-cache",
        },
        credentials: "include"
    }).then(res => res.json())
    .then(data => {
      if (data.status === 'ok') {
        resolve(data.data);
      } else {
        reject('error');
      }
    })
    .catch(err => {
      if (counter < 6) {
        counter++;
        getPlayers(id);
      } else {
        reject('error');
      }
    })
  })
}