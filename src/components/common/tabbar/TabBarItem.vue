<template>
  <div class="item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  // 获取当前item中的属性
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "blue"
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive() {
      // 判断当前活跃路由的路径中是否存在当前点击的item中的path,返回一个布尔值
      return this.$route.path.indexOf(this.path) !== -1
    },
    // 动态绑定style样式
    activeStyle() {
      // 通过isActive的布尔值决定是将props中获得的activeColor值绑定给css样式color，改变文字颜色，还是返回
      // 一个空的color属性，不绑定style="color:this.activeColor",从而不改变颜色
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    itemClick() {
      // 给全局路由传递需要跳转的路径
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.item {
  align-self: center;
  font-size: 0.39rem;
  flex: 1;
}
.item * {
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
}
img {
  width: 0.6rem;
}
</style>