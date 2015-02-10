# catdown-title

Catdown plugin. Extracts the first `h1` element on render, and emits a "title" event with its value on every change.

## Usage

Install with `npm`.

```bash
$ npm install --save catdown-title
```

`use` it on your Catdown editor.

```js
editor.use(require("catdown-title"));
```

Bind up.

```js
editor.on("title", function(title){
	document.title = title;
});
```