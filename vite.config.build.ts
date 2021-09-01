import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import config from './package.json';
import vueJsx from '@vitejs/plugin-vue-jsx';

const banner = `/*!
* ${config.name} v${config.version} ${new Date()}
* (c) 2021 @vdesui.
* Released under the MIT License.
*/`;

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/packages/styles/variables.scss"; @import "@/sites/common/assets/styles/variables.scss";`
      }
    }
  },
  plugins: [
    vue(),
    vueJsx()
  ],
  build: {
    minify: false,
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue', 'vue-router'],
      output: {
        banner,
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    },
    lib: {
      entry: 'src/packages/vdesui.vue.ts',
      name: 'vdesui',
      fileName: 'vdesui',
      formats: ['es', 'umd']
    }
  }
});
