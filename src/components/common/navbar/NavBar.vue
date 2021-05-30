<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

// 此处定义的css样式在本项目内不会再修改
<style scoped>
.nav-bar {
  height: 1.1rem;
  display: flex;
  /* background: #f54848; */
  line-height: 1.1rem;
  text-align: center;
  box-shadow: 0 1px 10px 3px rgba(0, 0, 0, 0.5);
}
.left,
.right {
  flex: 0.15;
  /* background: blue; */
}
.center {
  flex: 1;
}
</style>