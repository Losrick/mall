// 推荐信息模块
<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.image">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
  font-size: 0.373333rem;
  justify-content: space-evenly;
  text-align: center;
}
a > img {
  width: 85%;
}
a > div {
  margin-top: 0.12rem;
}
</style>