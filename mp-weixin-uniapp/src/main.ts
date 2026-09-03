import { createSSRApp } from 'vue'
import App from './App.vue'
import pinia from './stores' // 注意：这里直接导入 pinia 实例

export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia) // 注册 Pinia
  return {
    app,
  }
}
