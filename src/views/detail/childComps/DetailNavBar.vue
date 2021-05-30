<template>
  <div>
    <nav-bar>
      <div slot="left" class="backImg" @click="backClick"></div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in title"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="itemClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@components/common/navbar/NavBar'

export default {
  components: {
    NavBar
  },

  data() {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0,
    }
  },

  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('titleClick', index)

    },
    backClick() {
      this.$router.back()
    }
  },
}
</script>

<style scoped>
.title {
  display: flex;
  justify-content: space-evenly;
  font-size: 0.5rem;
}
.backImg {
  height: 100%;
  width: 100%;
  background: url("../../../assets/img/common/back.svg") no-repeat center;
}
.active {
  color: var(--color-tint);
}
</style>