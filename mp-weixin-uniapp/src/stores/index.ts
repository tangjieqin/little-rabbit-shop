import { createPinia } from 'pinia'
import { createUnistorage } from 'pinia-plugin-unistorage'

const pinia = createPinia()
// 注册持久化插件（只需一次，全局生效）
pinia.use(createUnistorage())

// 默认导出，给 main.ts 使用
export default pinia

// 模块统一导出
export * from './modules/member'
