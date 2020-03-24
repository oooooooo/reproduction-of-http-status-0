const controller = new AbortController()
const signal = controller.signal

window.onbeforeunload = (e) => controller.abort()

const request = (url) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'cache-control': 'no-cache,no-store'
    },
    cache: 'no-store',
    mode: 'cors',
    signal: signal,
    body: ''
  })
    .then(response => {
      if (response.ok) {
        return response.text()
      }
      throw new Error(`Request failed: ${response.status}`)
    })
    .then(text => console.log(text))
    .catch(err => {
      if (err.name === 'AbortError') {
        console.info('Fetch aborted')
      }
      else {
        console.error(err)
      }
    })
};

document.getElementById('sleep').onclick = () => {
  request('/api/sleep.php')
};
document.getElementById('404').onclick = () => {
  request('/api/notExists.php')
};
document.getElementById('500').onclick = () => {
  request('/api/500.php')
};
