<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车（{{ allCount }}）</div>
    </nav-bar>
    <cart-list class="cart-list" />
    <cart-bottom-bar />
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import NavBar from '@components/common/navbar/NavBar.vue'
import CartList from './childComps/CartList.vue'
import CartBottomBar from './childComps/CartBottomBar.vue'
export default {
  components: {
    NavBar,
    CartList,
    CartBottomBar,

  },
  computed: {
    ...mapGetters([
      'allCount'
    ])
  }
}
</script>


<style scoped>
#cart {
  height: 100vh;
}
.nav-bar {
  background: var(--color-tint);
  color: white;
  font-size: 0.666667rem;
}
.cart-list {
  height: calc(100% - 3.39rem);
  overflow: hidden;
}
</style>