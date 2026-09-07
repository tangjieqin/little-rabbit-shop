<template>
  <CustomNavbar />
  <XtxSwiper :list="bannerList" />

  <view class="index">index</view>
</template>

<script setup lang="ts">
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import { getHomeBannerAPI } from '@/services/home'
import type { BannerItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 页面加载
onLoad(() => {
  getHomeBannerData()
})
</script>

<style lang="scss" scoped></style>
