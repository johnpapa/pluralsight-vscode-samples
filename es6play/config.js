System.config({
  "baseURL": "/dist",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
  },
  "defaultJSExtensions": true
});