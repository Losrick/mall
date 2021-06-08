<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#f54848">
      <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="" />
      <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="#f54848">
      <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/category_active.svg"
        alt=""
      />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="#f54848">
      <img slot="item-icon" src="@/assets/img/tabbar/cart.svg" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/cart_active.svg"
        alt=""
      />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="#f54848">
      <template v-slot:item-icon
        ><img src="@/assets/img/tabbar/profile.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/profile_active.svg" alt=""
      /></template>
      <template v-slot:item-text> <div>我的</div></template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '@components/common/tabbar/TabBar.vue'
import TabBarItem from '@components/common/tabbar/TabBarItem.vue'
export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
</style>