# Vision Studio

[![](https://gitlab.com/vis-ion/slides/badges/master/pipeline.svg)](https://gitlab.com/vis-ion/studio/-/pipelines)
[![](https://user-content.gitlab-static.net/3acf9183b4b660d7600ebd245660b9e8602754f7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64655f7374796c652d7374616e646172642d627269676874677265656e2e737667)]()
[![](https://user-content.gitlab-static.net/bbac6c1cb193924b60fcfaeb8b6827e9f6f9e0d6/68747470733a2f2f636f6465636f762e696f2f676c2f7669732d696f6e2f73747564696f2f6272616e63682f253543783664363137333734363537322f67726170682f62616467652e7376673f746f6b656e3d464e50535957454e515a)](https://standardjs.com/)
[![](https://camo.githubusercontent.com/6e9ccd97d0b5a39067b7fbe5f903b733f4f8eba2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64652532306f662d636f6e647563742d6666363962342e7376673f7374796c653d666c61742d737175617265)](./CODE_OF_CONDUCT.md)
[![](https://camo.githubusercontent.com/71cbf5b01f72181806329175fcf729c106f5c27c/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f736f757263657265722d696f2f68616c6c2d6f662d66616d652e7376673f636f6c6f72423d666630303030)](./LICENSE.md)

An extensible, React & Node based visualisation platform.

### Technologies

The relevant technologies include, but are not limited to the following:

|Name|Description|
|:-|:-|
|[React](https://reactjs.org/)|UI Library|
|[Redux](https://redux.js.org/)|State management|
|[SASS](https://sass-lang.com/)|CSS Precompiler|
|[ESLint](https://eslint.org/)|Static code analysis|
|[Storybook](https://storybook.js.org/docs/react/get-started/install/)|Code documentation|
|[Jest](https://jestjs.io/)|Unit testing|
|[Cypress](https://www.cypress.io/)|E2E Testing|
|[Webpack](https://webpack.js.org/)|Bundling|


### Quickstart

- `yarn`
- `yarn build`
- `yarn start`

> - `yarn start` runs `npm run dev` (web app) `&` `npm run serve` (web api)
> - web app: [http://localhost:8080/app](http://localhost:8080/app)


## Slides App

 1. `app/slides/slideshows`: Create Slideshows composed of static, dynamic and interactive widgets.
![Slides - Slideshow .gif preview](./docs/gif/vision-slides-slideshow-demo.gif)

2. `app/slides/screens`:  Attach the slideshows to physical screens, through the cloud.
![Slides - Screens .gif preview](./docs/gif/vision-slides-screens-demo.gif)

3. `app/slides/schedules`: Schedule which slideshows should play, and assign schedules to screens arbitrarily.
![Slides - Schedules App .gif preview](./docs/gif/vision-slides-schedules-demo.gif)

> WIP:
> - Schools App (basic eLearning application)
> - Stats App (basic number crunching dashboards)

### Architecture

Microservice (and soon Microfrontend) architecture.

### Backend APIs:

|App|Dev URL|Description|
|:-|:-|:-|
|identity.api | [http://localhost:3000/api](http://localhost:3000/api) |Identity Server (OAuth)|
|slides.api | [http://localhost:3010/api](http://localhost:3010/api) |Digital Signage API|
|schools.api | [http://localhost:3020/api](http://localhost:3020/api) |Digital Education API|

### Project Structure

```
studio
│
│   # GENERATED FILES
├── dist (or build)
├── node_modules
│
│   # SOURCE FILES
├── src
│   ├── apps
│   │   ├── app-name-1/
│   │   │   ├── page-1/
│   │   │   ├── page-1/
│   │   │   └── router.js
│   │   │
│   │   └── app-name-2/
│   │
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── services/
│   ├── styles/
│   ├── util/
│   ├── widgets/
│   │
│   ├── app.js
│   ├── index.html
│   ├── index.js
│   ├── reducer.js
│   └── store.js
│
├── README.md
├── package.json
├── bower.json (if using bower)
└── .gitignore
```

## Development

Recommended development environment is with VSCode, and various extensions.

> NOTE: There is a `launch.json` which fires up an Applescript ( `osascript ../vision-platform-dev.scpt`) that launches all services required to run the platform, locally, when you press "Play" in the debug view of VSCode.

![](./docs/img/vscode-dev-env.png)

> Further more, this is the resulting launched `iTerm` view, where the various backend services are running, as documented below
![](./docs/img/iterm-multi-services.png)

### Storybook

Storybook is also used to work on components in isolation.

> `yarn dev:storybook`
> ![](./docs/gif/storybook.gif)

### Extending Vision

Follow these steps to add an entirely new application to Vision.

1. Under a new path, create the following file `src/apps/{new-app}/router.js`
2. Add the following content to this file:

```jsx
import React from 'react'

const scopeRoot = `/app/${newApp}` // e.g. '/app/slides'

export const NewAppRouter = () => {

    return <>
        <Route path={`${scopeRoot}`} render={ () => <h1>New App Route</h1> } />
    </>
}
```

3. Add your router to the app router in `src/app.js`:
```jsx
render () {
    return <Router>
        <Switch>
            {/* Apps */}
            <Route path={`/app/slides`} component={ SlidesRouter } />
            <Route path={`/app/schools`} component={ SchoolsRouter } />
            {/*
                ...
                ADD ROUTE HERE
                ...
            */}
            <Route path='*' component={ NotFound } />
            </Switch>
    </Router>
}
```

4. Add the navbar for your route, in the `scopeRoot` is defined in the `router.js`.

```jsx
// ...
const scopeRoot = `/app/${newApp}` // e.g. '/app/slides'

export const NewAppNavbar = [
    {
        label: 'New App Home',
        path: `${scopeRoot}/`,
        faIcon: '{react-fontawesome-icon-name}'
    }
]

export const NewAppRouter = () => {
// ...
}
```

### Tests

For the frontend we use [cypress.io](https://www.cypress.io/) for end-to-end testing, and [Jest](https://jestjs.io/) for unit tests.

> `yarn tests:e2e`
![](./docs/img/tests-cypress.png)

> `yarn tests:unit`
![](./docs/img/tests-jest.png)


The backend is currently being tested with a [Postman](https://www.postman.com/) collection.

![](./docs/img/postman-tests.png)

### Source Control

This repo uses a feature-branch `git` workflow. To assist with this, we use `./scripts`, such as:

- `yarn branch`

> follow prompts to createa a `feature`, `hotfix` branch.
> ![](./docs/gif/yarn-branch.gif)

- `yarn commit`

> follow prompts to create a consistent commit structure.
> ![](./docs/gif/yarn-commit.gif)

- `yarn release`

> follow prompts to create a consistent release (with git tag, etc.)
> ![](./docs/gif/yarn-release.gif)
