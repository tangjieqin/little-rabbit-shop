<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- 保持自定义导航栏不动，其他的可以上下滑动 -->
  <scroll-view @scrolltolower="onScrolttolower" class="scroll-view" scroll-y>
    <!-- 自定义轮播图 -->
    <XtxSwiper :list="bannerList" />
    <!-- 分类面板 -->
    <CategoryPanel :list="categoryList" />
    <!-- 热门推荐 -->
    <HotPanel :list="hotList" />
    <!-- 猜你喜欢 -->
    <XtxGuess ref="xtxGuessRef" />
  </scroll-view>
</template>

<script setup lang="ts">
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CategoryPanel from '@/pages/index/components/CategoryPanel.vue'
import HotPanel from '@/pages/index/components/HotPanel.vue'
import type { XtxGuessInstance } from '@/components'

// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 获取前台页面类目数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

// 获取热门推荐数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

// 页面加载
onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
})

// 获取猜你喜欢组件实例
const xtxGuessRef = ref<XtxGuessInstance>()

// 滚动到底部加载更多数据
const onScrolttolower = () => {
  xtxGuessRef.value?.getMore()
}
</script>

<style lang="scss">
/* 主界面的颜色和底部区分开来 */
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.scroll-view {
  flex: 1;
  overflow: hidden;
}
</style>
