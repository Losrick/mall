<template>
  <scroll :pull-up-load="true">
    <div>
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :product="item"
      />
    </div>
  </scroll>
</template>

<script>
import Scroll from '@components/common/scroll/Scroll'
import { mapGetters } from 'vuex'
import CartListItem from './CartListItem.vue'
export default {
  components: {
    mapGetters,
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters([
      'cartList'
    ])
  }
}
</script>

<style scoped>
</style>