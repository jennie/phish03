const fs = require('fs');
const sass = require('sass');

// HTML
const html = ['demo-recommendations.html', 'demo-tinder.html', 'index.html'];
html.forEach((f) => {
  let fileContent = fs.readFileSync(`./demo-vite/${f}`, 'utf-8');

  fileContent = fileContent
    .replace(/.\/images/g, '../assets/images')
    .replace('favicon', '../assets/favicon')
    .replace('<script type="module">', '<script>');
  if (f.includes('index')) {
    fileContent = fileContent
      .replace(
        '<title>',
        `
  <link rel="stylesheet" href="./index.css">
  <title>`,
      )

      .replace(`import './index.scss';`, '');
  } else {
    fileContent = fileContent
      .replace(
        '<title>',
        `
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
  <link rel="stylesheet" href="../dist/effect-tinder.min.css">
  <link rel="stylesheet" href="./${f.replace('html', 'css')}">
  <title>`,
      )
      .replace(
        `<script>`,
        `
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <script src="../dist/effect-tinder.min.js"></script>
  <script>
  `,
      );
    fileContent = fileContent
      .split('\n')
      .filter(
        (l) =>
          !l.trim().startsWith('import') &&
          !l.trim().startsWith('/**') &&
          !l.trim().startsWith('*/') &&
          !l.trim().startsWith('*'),
      )
      .join('\n');
  }
  fs.writeFileSync(`./demo-static/${f}`, fileContent);
});

// CSS
const scss = ['demo-recommendations.scss', 'demo-tinder.scss', 'index.scss'];
scss.forEach((f) => {
  const scssContent = fs.readFileSync(`./demo-vite/${f}`, 'utf-8');
  const cssContent = sass.compileString(scssContent).css;
  fs.writeFileSync(`./demo-static/${f.replace('.scss', '.css')}`, cssContent);
});
