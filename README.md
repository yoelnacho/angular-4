# SPA - Angular4

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1.

## TODO
- reorder: https://www.youtube.com/watch?v=teMC-JjA9E4&t=5684s -
- create compodoc


## ng new

#### Install:
```sh
ng new angular4 --style:scss
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## compodoc
[compodoc](https://compodoc.github.io/website/guides/getting-started.html).

#### Local installation:
```sh
npm install --save-dev @compodoc/compodoc
```
#### Render documentation and run server
```sh
compodoc -p tsconfig.json -s
// view documentation - http://127.0.0.1:8080
```

## angular-cli-ghpages
[readme ghpages](https://runkit.com/npm/angular-cli-ghpages).

#### Install:
```sh
npm i -g angular-cli-ghpages
```
#### Usage:
```sh
$ ng build --prod --base-href "https://yoelnacho.github.io/yoelnacho/"
$ angular-cli-ghpages
```
