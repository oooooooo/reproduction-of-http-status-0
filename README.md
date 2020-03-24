# Reproduction of HTTP STATUS 0
## Requirement
- Docker
## Usage
```bash
docker-compose up
```
## Memo
- [Abortable fetch](https://developers.google.com/web/updates/2017/09/abortable-fetch)
  - [AbortController.signal](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal)
- [XMLHttpRequest.readyState](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState)
- [Why is AJAX returning HTTP status code 0?](https://stackoverflow.com/questions/2000609/why-is-ajax-returning-http-status-code-0)
  - [Status code 0 in chrome for ajax call with jquery](https://forum.jquery.com/topic/status-code-0-in-chrome-for-ajax-call-with-jquery)
## License
MIT
