<template name="skeleton">
  <view is="components/XtxSwiper">
    <view class="carousel XtxSwiper--carousel data-v-17cc3903 XtxSwiper--data-v-17cc3903">
      <swiper
        :circular="true"
        class="data-v-17cc3903 XtxSwiper--data-v-17cc3903"
        :interval="3000"
        :current="0"
        :autoplay="false"
      >
        <swiper-item
          class="data-v-17cc3903 XtxSwiper--data-v-17cc3903"
          style="
            position: absolute;
            width: 100%;
            height: 100%;
            transform: translate(0%, 0px) translateZ(0px);
          "
        >
          <navigator
            class="navigator XtxSwiper--navigator data-v-17cc3903 XtxSwiper--data-v-17cc3903"
            hover-class="none"
          >
            <image
              class="slider-img XtxSwiper--slider-img data-v-17cc3903 XtxSwiper--data-v-17cc3903 sk-image"
              mode="scaleToFill"
            ></image>
          </navigator>
        </swiper-item>
      </swiper>
      <view class="indicator XtxSwiper--indicator data-v-17cc3903 XtxSwiper--data-v-17cc3903">
        <text
          class="dot XtxSwiper--dot data-v-17cc3903 XtxSwiper--data-v-17cc3903 active XtxSwiper--active"
        ></text>
        <text class="dot XtxSwiper--dot data-v-17cc3903 XtxSwiper--data-v-17cc3903"></text>
        <text class="dot XtxSwiper--dot data-v-17cc3903 XtxSwiper--data-v-17cc3903"></text>
        <text class="dot XtxSwiper--dot data-v-17cc3903 XtxSwiper--data-v-17cc3903"></text>
        <text class="dot XtxSwiper--dot data-v-17cc3903 XtxSwiper--data-v-17cc3903"></text>
      </view>
    </view>
  </view>
  <view is="pages/index/components/CategoryPanel">
    <view class="category CategoryPanel--category data-v-44ae5a81 CategoryPanel--data-v-44ae5a81">
      <navigator
        class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
        hover-class="none"
      >
        <image
          class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
        ></image>
        <text
          class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-639 sk-text"
        >
          居家
        </text>
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
        hover-class="none"
      >
        <image
          class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
        ></image>
        <text
          class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-101 sk-text"
        >
          锦鲤
        </text>
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
        hover-class="none"
      >
        <image
          class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
        ></image>
        <text
          class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-26 sk-text"
        >
          服饰
        </text>
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
        hover-class="none"
      >
        <image
          class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
        ></image>
        <text
          class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-16 sk-text"
        >
          母婴
        </text>
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
        hover-class="none"
      >
        <image
          class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
        ></image>
        <text
          class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-593 sk-text"
        >
          个护
        </text>
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
        hover-class="none"
      >
        <image
          class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
        ></image>
        <text
          class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-853 sk-text"
        >
          严选
        </text>
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
        hover-class="none"
      >
        <image
          class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
        ></image>
        <text
          class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-214 sk-text"
        >
          数码
        </text>
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
        hover-class="none"
      >
        <image
          class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
        ></image>
        <text
          class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-622 sk-text"
        >
          运动
        </text>
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
        hover-class="none"
      >
        <image
          class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
        ></image>
        <text
          class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-466 sk-text"
        >
          杂项
        </text>
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
        hover-class="none"
      >
        <image
          class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
        ></image>
        <text
          class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-330 sk-text"
        >
          品牌
        </text>
      </navigator>
    </view>
  </view>
  <view is="pages/index/components/HotPanel">
    <view class="panel HotPanel--panel hot HotPanel--hot data-v-df6c854a HotPanel--data-v-df6c854a">
      <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
        <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
          <text
            class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-689 sk-text"
          >
            特惠推荐
          </text>
          <text
            class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-757 sk-text"
          >
            精选全攻略
          </text>
        </view>
        <navigator
          class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
          hover-class="none"
        >
          <image
            class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
            mode="aspectFit"
          ></image>
          <image
            class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
            mode="aspectFit"
          ></image>
        </navigator>
      </view>
      <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
        <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
          <text
            class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-924 sk-text"
          >
            爆款推荐
          </text>
          <text
            class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-347 sk-text"
          >
            最受欢迎
          </text>
        </view>
        <navigator
          class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
          hover-class="none"
        >
          <image
            class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
            mode="aspectFit"
          ></image>
          <image
            class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
            mode="aspectFit"
          ></image>
        </navigator>
      </view>
      <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
        <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
          <text
            class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-526 sk-text"
          >
            一站买全
          </text>
          <text
            class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-303 sk-text"
          >
            精心优选
          </text>
        </view>
        <navigator
          class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
          hover-class="none"
        >
          <image
            class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
            mode="aspectFit"
          ></image>
          <image
            class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
            mode="aspectFit"
          ></image>
        </navigator>
      </view>
      <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
        <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
          <text
            class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-979 sk-text"
          >
            新鲜好物
          </text>
          <text
            class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-878 sk-text"
          >
            生活加分项
          </text>
        </view>
        <navigator
          class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
          hover-class="none"
        >
          <image
            class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
            mode="aspectFit"
          ></image>
          <image
            class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
            mode="aspectFit"
          ></image>
        </navigator>
      </view>
    </view>
  </view>
  <view is="components/XtxGuess" class="r r">
    <view class="caption XtxGuess--caption data-v-e94a02da XtxGuess--data-v-e94a02da"></view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-3-5714-600 {
  background-image: linear-gradient(
    transparent 3.5714%,
    #eeeeee 0%,
    #eeeeee 96.4286%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-233 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-text-14-2857-639 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-101 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-26 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-16 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-593 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-853 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-214 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-622 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-466 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-330 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-689 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-757 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-924 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-347 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-526 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-303 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-979 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-878 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
