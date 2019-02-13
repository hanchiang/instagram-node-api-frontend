## Motivation
Have a common webpack, babel setup for react projects without spending a few hours to set them up every time.

## Features
* Webpack 4
  * Production: Minify `css` and `js`
  * Assets handling: Assets(e.g. images, fonts) in `src/static` are copied to `/dist`
  * SASS
* Babel 7
* Eslint with airbnb style guide
* React prop typechecking via [prop-types](https://github.com/facebook/prop-types)
* Component Code splitting via [react-loadable](https://github.com/jamiebuilds/react-loadable)
* Loading spinner via [react-loader-spinner](https://github.com/mhnpd/react-loader-spinner)
* Routing via [react-router](https://github.com/ReactTraining/react-router)
* State management with [redux](https://github.com/reduxjs/redux), [react-redux](https://github.com/reduxjs/react-redux), [redux-saga](https://github.com/redux-saga/redux-saga)
* Test with [jest](https://github.com/facebook/jest)


## How to use
* Development: `npm start`
* Production: `npm build`

## Credits
[Adeel Imran's awesome guide on medium](https://medium.freecodecamp.org/how-to-combine-webpack-4-and-babel-7-to-create-a-fantastic-react-app-845797e036ff) for the sick babel and webpack setup