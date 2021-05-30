// home页的轮播图
<template>
  <swiper>
    <!-- 注意绑定key为item.image -->
    <swiper-item v-for="item in banner" :key="item.image">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="ImgLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
// 导入轮播图
import { Swiper, SwiperItem } from '@components/common/swiper/index'

export default {
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    ImgLoad() {
      if (!this.isLoad) {
        this.$emit('swiperImgLoad')
        this.isLoad = !this.isLoad
      }
    }
  },
}
</script>

<style scoped>
</style>