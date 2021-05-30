<template>
  <div class="goods">
    <goods-list-item v-for="item in good" :key="item.list" :goodsItem="item" />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  components: {
    GoodsListItem
  },

  props: {
    good: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>