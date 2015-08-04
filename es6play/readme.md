#Working with ES6 and Modules

## Quick Start

1. Install the global packages.

	`npm install gulp -g`

2. Install the local packages for this demo.

	`npm install`

3. Run the server, launch the browser, and transpile the ES6 to ES5 using Babel

	`gulp serve`

## Details

The source code is located in the `js` folder and written in ES6. We use `gulp` to transpile the ES6 to ES5 using Babel. The `gulp serve` task transpiles the code and puts it in the `dist` folder and then watches for more changes. If you change the source, it will transpile again. It also runs the superstatic server (you can run any server you want, but this is super simple) and launches the browser using browser-sync. When any files change, the browser will reload.

When you launch a browser to [http://localhost:3000](http://localhost:3000) SystemJS kicks in and looks for `config.js` for its settings. We tell SystemJS to use Babel to transpile and that the baseURL for the code is in `/dist`. This is important so all import statements that were written assuming relative pathing in the `src` folder will still work. Finally, we tell SystemJS that import statements by default should assume they end with `.js`. This is accomplished by setting `defaultJSExtensions` to `true`. See below for an example.

```javascript
System.config({
    transpiler: 'babel',
    baseURL: '/dist',
    babelOptions: {
    },
    "defaultJSExtensions": true
});
```

We can now import the main starting modules `main.js` like this:

```javascript
System.import('./dist/main');
```

Now SystemJS gets `/dist/main.js` which in turn imports `autos`. SystemJS knows that the base URL is `/dist` and to assume an extension of `.js`, so it really gets `/dist/autos.js`.

Now we are golden!

## Credits

Special thanks to my friend Dan for hacking at this simple example with me :)