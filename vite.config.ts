import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import { resolve } from 'node:path'
import fs from 'node:fs';
import postcss from 'postcss';
import cssnano from 'cssnano';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(), {
      name: 'minify-extra-css',
      apply: 'build',
      async closeBundle() {
        const input = resolve("src/assets/vars.css");
        const output = resolve("dist/vars.css");

        const css = fs.readFileSync(input, 'utf8');

        const result = await postcss([cssnano()]).process(css, {
          from: input,
          to: output,
        });

        fs.writeFileSync(output, result.css, 'utf8');
      }
    }
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueScribble',
      fileName: 'vue-scribble-lib',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
});
