// stores/userMember.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// 1. 定义明确的会员信息类型（根据实际后端返回结构调整）
export interface MemberInfo {
  id: string
  name: string
  avatar?: string
  phone?: string
  token: string
  // 其他字段...
}

export const useUserMemberStore = defineStore(
  'userMember',
  () => {
    // 2. 使用具体类型替代 any，并设置合理的初始值
    const member = ref<MemberInfo | null>(null)

    // 3. 添加 getter：是否登录
    const isLogin = computed(() => !!member.value?.token)

    // 4. 保存会员信息（登录）
    const setProfile = (info: MemberInfo) => {
      member.value = info
    }

    // 5. 更新部分字段（可选）
    const updateProfile = (partial: Partial<MemberInfo>) => {
      if (member.value) {
        member.value = { ...member.value, ...partial }
      }
    }

    // 6. 清除会员信息（登出）
    const clearProfile = () => {
      member.value = null
    }

    return {
      member, // 改为 member，更简洁
      isLogin,
      setProfile,
      updateProfile,
      clearProfile,
    }
  },
  {
    // 7. 持久化：只持久化必要字段（token 和 id），避免存储敏感信息或大对象
    unistorage: {
      key: 'user-member', // 自定义存储 key
      paths: ['member.id', 'member.token', 'member.name'], // 只持久化这些字段
    },
  },
)
