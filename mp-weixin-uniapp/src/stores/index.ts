import { createPinia } from 'pinia'
import { createUnistorage } from 'pinia-plugin-unistorage'

const pinia = createPinia()
// 注册持久化插件（只需一次，全局生效）
pinia.use(createUnistorage())

export default pinia
