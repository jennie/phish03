const fs = require('fs');
const path = require('path');
const { rollup } = require('rollup');
const Terser = require('terser');
const banner = require('./banner');

const buildJs = async () => {
  const bundle = await rollup({
    input: path.resolve(__dirname, '../demo-vite/effect-tinder.esm.js'),
  });
  const bundleResult = await bundle.write({
    format: 'umd',
    name: 'EffectTinder',
    strict: true,
    sourcemap: true,
    sourcemapFile: path.resolve(__dirname, '../dist/effect-tinder.js.map'),
    file: path.resolve(__dirname, '../dist/effect-tinder.js'),
    banner,
  });
  const result = bundleResult.output[0];
  const { code, map } = await Terser.minify(result.code, {
    sourceMap: {
      content: result.map,
      filename: `effect-tinder.min.js`,
      url: `effect-tinder.min.js.map`,
    },
    output: {
      preamble: banner,
    },
  }).catch((err) => {
    console.error(`Terser failed on file effect-tinder: ${err.toString()}`);
  });

  fs.writeFileSync(
    path.resolve(__dirname, `../dist/effect-tinder.min.js`),
    code,
  );
  fs.writeFileSync(
    path.resolve(__dirname, `../dist/effect-tinder.min.js.map`),
    map,
  );

  const file = path.resolve(__dirname, `../demo-vite/effect-tinder.esm.js`);
  const content = fs.readFileSync(file, 'utf-8');
  fs.writeFileSync(
    path.resolve(__dirname, '../dist/effect-tinder.esm.js'),
    `${banner}\n${content}`,
  );
};
module.exports = buildJs;
