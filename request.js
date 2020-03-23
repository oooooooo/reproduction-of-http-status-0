const request = (url) => {
  const settings = {
    "url": url,
    "method": "POST",
    "headers": {
      "cache-control": "no-cache,no-store"
    },
    "cache": false,
    "crossDomain": true,
    "data": {}
  };
  $.ajax(settings).done(function (response) {
    console.log('success')
  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.log('fail')
    console.dir(jqXHR)
    console.log('textStatus: ' + textStatus)
    console.log('errorThrown: ' + errorThrown)
  })
}

$('#sleep').click(() => {
  request('/api/sleep.php')
});
$('#404').click(() => {
  request('/api/notExists.php')
});
$('#500').click(() => {
  request('/api/500.php')
});
