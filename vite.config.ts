/*
 * @Date: 2024-01-16 23:18:33
 * @LastEditTime: 2024-01-23 22:39:34
 * @Author: wangyongjie
 * @Note:  
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// console 插件
import TurboConsole from 'unplugin-turbo-console/vite'
import VueSetComputedName from 'vite-plugin-vue-setup-extend'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    TurboConsole(),
    VueSetComputedName()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
