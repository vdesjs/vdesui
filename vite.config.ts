import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-md';
import config from './package.json';
import autoprefix from 'autoprefixer';
import rpxtopx from "./src/plugins/postcss-rpxtopx/index"
import vueJsx from '@vitejs/plugin-vue-jsx';
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src')
      }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/packages/styles/variables.scss"; @import "@/sites/common/assets/styles/variables.scss";`
      }
    },
    postcss: {
      plugins: [
        autoprefix({
          overrideBrowserslist: ['last 20 versions']
        }),
        rpxtopx({
          baseUnit: 0.5
        })
      ]
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown(),
    vueJsx()
  ],
  build: {
    target: 'es2015',
    outDir: './dist-doc',
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        doc: resolve(__dirname, 'index.html'),
        mobile: resolve(__dirname, 'demo.html')
      }
    }
  }
});
