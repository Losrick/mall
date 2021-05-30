<template>
  <scroll class="contet" :probe-type="3" :pull-up-load="true">
    <div class="category-detail">
      <div class="goods" v-for="(item, index) in detailCategory" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" />
          <div class="info">
            <p>{{ item.title }}</p>
          </div>
        </a>
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from '@components/common/scroll/Scroll.vue'
export default {
  components: { Scroll },
  props: {
    detailCategory: Array,
    default() {
      return []
    }
  }
}
</script>

<style scoped>
.contet {
  height: 15.35rem;
  overflow: hidden;
}
.category-detail {
  display: flex;
  padding-top: 0.2rem;
  font-size: 0.5rem;
  flex-wrap: wrap;
}
.category-detail .goods {
  width: 48%;
  margin-bottom: 0.2rem;
}
.goods img {
  width: 90%;
}
</style>