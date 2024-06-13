# Tinder Slider

Tinder Slider is a premium [Swiper](https://swiperjs.com) effect plugin that adds Tinder card-style interactions and effects.

It can be easily integrated into your [Framework7](https://framework7.io) or [Ionic](https://ionicframework.com) app as Swiper already integrated into these frameworks.

## Features

- it is based on [Swiper](https://swiperjs.com), so it supports most of Swiper features
- any content can be placed within slides
- can be actually any size (aspect ratio)
- can be used for any kind of content presentation (gallery, recommendations, etc.)

## Package

In the package you will find:

- static demo - using plain HTML, CSS, and JS
- modules demo - project using ES modules created with Vite
- all required extra styles
- all required JavaScript to make it work
- instructions on how to build, run and preview the project

## Swiper Studio

This effect is also available in [Swiper Studio](https://studio.swiperjs.com)

<!-- STORE_END -->

## Project Structure

This project uses [Vite](https://vitejs.dev) for development and bundling the production build.

- `/demo-static/` - folder with static demo using plain HTML, CSS and JS files
- `/demo-vite/` - folder with `.html`, `.js`, `.scss` source files. These files are processed by Vite during development, and will be bundled on production build.
- `/dist/` - folder with Tinder Effect scripts and sources
- `/assets/` - folder with static assets (usually images) which are not processed by Vite during development, but still will be bundled on production build.
- `/www/` - folder with production build bundled with Vite (this folder will appear when you run a command to create production build).

## Usage

### HTML Layout

Check `./demo-vite/index.html` (or `./demo-static/index.html`) for required HTML layout

### In Browser Environment

You need to include Tinder Effect scripts and styles in addition to Swiper scripts and styles from the (`./dist/` folder), e.g.

```html
<head>
  <!-- Swiper styles -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
  />
  <!-- Tinder Effect styles -->
  <link rel="stylesheet" href="path/to/effect-tinder.min.css" />
</head>

<body>
  <div id="app">
    <!-- Tinder slider -->
    <div class="swiper">
      <!-- ... -->
    </div>
  </div>
  <!-- Swiper script -->
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <!-- Tinder effect script -->
  <script src="path/to/effect-tinder.min.js"></script>
</body>
```

### In ESM Environment

In environment with ES modules support (webpack, Vite, rollup, etc.), you can just import `effect-tinder.esm.js` and `effect-tinder.css` (or `effect-tinder.scss`) from the `./dist/` folder, e.g.:

```js
// import Tinder effect module
import EffectTinder from './effect-tinder.esm.js';
// import Tinder effect styles
import './effect-tinder.scss';
```

### Initialization

After you included (or imported) required Tinder Effect scripts and styles and have the required layout, you need to pass Tinder Effect module to Swiper constructor and set effect to `'tinder'`:

In browser environment:

```html
<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
  />
  <link rel="stylesheet" href="path/to/effect-tinder.min.css" />
</head>

<body>
  <div id="app">
    <!-- Tinder slider -->
    <div class="swiper">
      <!-- ... -->
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <script src="path/to/effect-tinder.min.js"></script>
  <!-- Init Tinder Effect -->
  <script>
    const swiper = new Swiper({
      // pass EffectTinder module to modules
      modules: [EffectTinder],
      // specify "tinder" effect
      effect: 'tinder',
      // other parameters
    });
  </script>
</body>
```

In ESM environment:

```js
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
import EffectTinder from './effect-tinder.esm.js';
import './effect-tinder.scss';
import './main.scss';

// Init Tinder Effect
const swiper = new Swiper({
  // pass EffectTinder module to modules
  modules: [Autoplay, Navigation, Pagination, EffectTinder],
  // specify "tinder" effect
  effect: 'tinder',
  // other parameters
});
```

## Events

When Tinder effect is enabled it will emits special `tinderSwipe` event that you can use to determine slide change swipe direction:

```js
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
import EffectTinder from './effect-tinder.esm.js';
import './effect-tinder.scss';
import './main.scss';

// Init Tinder Effect
const swiper = new Swiper({
  // pass EffectTinder module to modules
  modules: [Autoplay, Navigation, Pagination, EffectTinder],
  // specify "tinder" effect
  effect: 'tinder',
  on: {
    tinderSwipe(s, direction) {
      console.log(direction); // -> will be "left" or "right"
    },
  },
});
```

## Usage with React

Usage with Swiper React components is pretty similar, there only difference is we need to pass all mentioned above `Swiper` parameters as `<Swiper>` component properties:

```jsx
import React from 'react';
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
import EffectTinder from './effect-tinder.esm.js';
import './effect-tinder.scss';
import './main.scss';

export default function App() {
  return (
    <div>
      ...
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectTinder]}
        effect="tinder"
        onTinderSwipe={(s, direction) => {
          console.log(direction); // -> will be "left" or "right"
        }}
      >
        <SwiperSlide>...</SwiperSlide>
        <SwiperSlide>...</SwiperSlide>
        <SwiperSlide>...</SwiperSlide>
        <SwiperSlide>...</SwiperSlide>
      </Swiper>
    </div>
  );
}
```

## Development Preview

First of all, we need to install all dependencies, run in terminal:

```
npm i
```

To launch development server (with hot reload), run the following command in terminal:

```
npm run dev
```

And the project will be available at [http://localhost:3000](http://localhost:3000)

## Production Build

To create a production build, run the following command in terminal:

```
npm run build-dist
```

And production-ready project will be available in `/dist/` folder.

## Connect to Git

It is possible to connect this project folder to the new repository. For example for GitHub:

1. Create new GitHub repository at https://github.com/new

2. Initialize Git. In terminal run:

   ```
   git init
   ```

3. Add remote origin. Replace $USERNAME and $REPOSITORY with your GitHub username and newly created repository name:
   ```
   git remote add origin https://github.com/$USERNAME/$REPOSITORY.git
   ```

That is all, after that you can track, commit and push/pull to repo, for example:

```
git add .
git commit -m "initial commit"
git push origin master
```
