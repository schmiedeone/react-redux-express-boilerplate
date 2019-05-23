# React Redux Express Boilerplate

Quick way to get up and started for prototyping with React, Redux and Express.

## Bundled Dependencies

- [React](https://facebook.github.io/react/)
- [React Router](https://github.com/reactjs/react-router)
- [Redux](redux.js.org) with [redux-thunk](https://github.com/gaearon/redux-thunk)
- [Babel](https://babeljs.io) for ES6 awesomeness
- [Webpack](https://webpack.github.io/)
- [Express](expressjs.com) with [Webpack HMRE](https://webpack.github.io/docs/hot-module-replacement.html)
- [Nodemon](https://github.com/remy/nodemon) for server live-reload
- [ESLint](eslint.org/)

## Structure

The core app is structured to separate Redux containers and presentational components. Read more about it [here](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.qx4d1v4ek). [CSS modules](https://github.com/css-modules/css-modules) is used by default to better scope and separate styles for each component, with a global CSS file for global styles.

- `app` - Core app
  - `actions` - Redux actions
  - `api` - External services integrated
  - `components` - Presentational components
  - `containers` - Data/State containers
  - `reducers` - Redux reducers
  - `store` - Redux store
  - `app.global.css` - Global CSS file
  - `index.tpl.html` - Template HTML for rendering React Components. This will be injected with `<style>` tags by Webpack
  - `index.js` - Entry point to app
  - `routes.js` - Sample React Router implementation
 - `server` - Server code
   - `server.js` - Simple Express server setup for Webpack HMRE. By default offloads routing to React Router but can still have REST endpoints setup.
 - `static` - Static assets

## Usage
### Installation

```
git clone git@github.com:zweicoder/react-redux-express-boilerplate.git
cd <project-directory> && npm install
```

### Running
Start a hot dev server

`npm run dev`


### Pushing without history
When you're ready to push, first set a new remote

`git remote set-url <new-origin>`

Checkout branch with no history, then commit and push

```
git checkout --orphan <new-branch>
git commit -a -m 'Initial Commit'
git push <new-branch>:master
```

or if no one is working on the repo

`git push -f origin orphan:master`

Now you can track remote master with your local master. Alternatively delete your local master branch after creating orphan branch, rename it to master and push.

### Build
Consider linting and testing before build is allowed to happen, my personal opinion is it slows down prototyping so I only do it when the project gets bigger.

`npm run build // This only builds for production`

### TODO
- [ ] Setup tests
- [ ] Server build

### API

- `GET /api/items` Get all items
- `GET /api/items/:id` Get an item by id
- `GET /api/items/category/:category` Get an item by its category
- `POST /api/items` Send wardrobe data to server

### TASKS
- ~~Create a new route / page~~
- Use the MyCard component to create a carousel/gallery/slider [Documentation about MUI Card](https://v0.material-ui.com/#/components/card). You can use whatever you feel is good for this task. It might be simple snippet created by yourself or you ca use a solution that already exists.
- Style your carousel a bit to make it look cleaner and more appealing. You can use placeholder images or icons, if you want to, but it is not mandatory. You can also remove some parts of the code if you think they are not necessary.
- Populate each slide with a title and list of items fetched from the server (using route /api/items).
- Do the same step but use the /api/items/:id or /api/items/category/:category route so you would get items one at a time from the server
- When an item in the list is clicked, it is added to a wardrobe object and we move to the next slide.
- On the last slide, send the wardrobe data object to the server
- Display the response message at the end (after sending the wardrobe data)

### HINTS
- Main page/Card page is available here: http://localhost:3000/#/mypage
- To hide Redux Dev tools from the right sidebar press ctrl + b. 
