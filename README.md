# Humans Please

A small, exhausted plea to stop forwarding raw Claude output.

The site is plain HTML, CSS, and JavaScript in `dist/`. It has no dependencies or build step. Serve that directory with any static web server; for example:

```sh
python3 -m http.server 8000 --directory dist
```

The copy-link button uses the browser clipboard and offers a selectable address if clipboard access is unavailable. The site uses system fonts and makes no third-party requests.
