import type { GoodsResult } from '@/types/good'
import { http } from '@/utils/http'

/**
 * 商品详情
 * @param id
 * @returns
 */
export const getGoodsByIdAPI = (id: string) => {
  return http<GoodsResult>({
    url: '/goods',
    method: 'GET',
    data: {
      id,
    },
  })
}
