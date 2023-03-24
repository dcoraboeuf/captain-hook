Captain Hook
============

To use, on one terminal, run the listener:

```bash
node index.js
```

In another terminal, run [`ngrok`](https://ngrok.com/) to expose the listener:

```bash
ngrok http 3000
```

This ouputs something like:

```
Forwarding  http://25dc-87-65-000-000.ngrok.io -> http://localhost:3000
```

Using this example, use http://25dc-87-65-000-000.ngrok.io/webhook as a webhook URL
and look at the received payloads being output in the listener output.

That's it. There are definitely fancier solutions for mocking hooks, etc., but when
investigating the payloads sent to webhooks, this may just be enough.
