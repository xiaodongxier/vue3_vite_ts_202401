/*
 * @Date: 2024-01-16 23:18:33
 * @LastEditTime: 2024-01-22 22:02:59
 * @Author: wangyongjie
 * @Note:  
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// console 插件
import TurboConsole from 'unplugin-turbo-console/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    TurboConsole()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
