<template>
  <swiper class="swiper-css">
    <swiper-item v-for="item in swiperImg" :key="item">
      <img :src="item" alt="" @load="imgload" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from '@components/common/swiper/index'
export default {
  components: {
    SwiperItem,
    Swiper
  },
  props: {
    swiperImg: {
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
  methods: {
    imgload() {
      if (!this.isLoad) {
        this.$emit('imageLoad'),
          this.isLoad = !this.isLoad
      }
    }
  },
}
</script>

<style scoped>
.swiper-css {
  height: 8rem;
}
</style>