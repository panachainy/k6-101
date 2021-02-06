import http from 'k6/http';

function getRandomFiveString() {
    return Math.random().toString(10).substring(3, 18);
}

export default function () {
  var url = 'http://localhost:3001/titles';
  var payload = JSON.stringify({
    key: getRandomFiveString(),
    name: {
        th: 'โหลดเทส',
        en: 'load_test',
      },
    type: 'T',
    is_active: true,
  });

  var params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
}
