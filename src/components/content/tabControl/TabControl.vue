<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in title"
      :key="index"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  },

}

</script>

<style scoped>
.tab-control {
  display: flex;
  height: 1.13333rem;
  line-height: 1.106667rem;
  font-size: 0.5rem;
  background: white;
  justify-content: space-around;
  z-index: 2;
}
.tab-control > div {
  height: 1rem;
}
.active {
  color: var(--color-high);
  border-bottom: 3px solid var(--color-high);
}
</style>