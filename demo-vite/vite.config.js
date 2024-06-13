import path from 'path';

export default {
  root: './',
  base: '',
  publicDir: path.resolve(__dirname, '../assets'),
  build: {
    outDir: path.resolve(__dirname, '../www'),
    assetsInlineLimit: 0,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, './index.html'),
        tinder: path.resolve(__dirname, './demo-tinder.html'),
        recommendations: path.resolve(__dirname, './demo-recommendations.html'),
      },
    },
  },
};
