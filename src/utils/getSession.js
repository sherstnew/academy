import { ACADEMYCONFIG } from '../academy.config';

export function getSession(token) {
  return new Promise((resolve, reject) => {
    fetch(`${ACADEMYCONFIG.HOST}/api/sessions`, {
        method: 'GET',
        headers: {
          "content-type": "application/json",
          "cache-control": "no-cache",
          "academy_token": token
        },
        credentials: "include"
    }).then(res => res.json())
    .then(data => {
      if (data.status === 'ok') {
        resolve(data.data);
      } else {
        reject('error');
      };
    })
    .catch(err => {
      reject('error');
    })
  })
}