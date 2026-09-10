import type { PageParams } from '@/types/global'
import type { HotResult } from '@/types/hot'
import { http } from '@/utils/http'

type HotParams = PageParams & {
  subType?: string
}

/**
 * 通用的热门推荐类型接口
 * @param url 请求地址
 * @param data 请求参数
 * @returns
 */
export const getHotRecommendAPI = (url: string, data?: HotParams) => {
  return http<HotResult>({
    url,
    method: 'GET',
    data,
  })
}
