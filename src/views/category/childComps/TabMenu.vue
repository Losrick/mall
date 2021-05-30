<template>
  <scroll class="tab-menu" :probe-type="3" :pull-up-load="true">
    <div
      class="list"
      v-for="(item, index) in category"
      :key="index"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      {{ item.title }}
    </div>
  </scroll>
</template>

<script>
import Scroll from '@components/common/scroll/Scroll.vue'

export default {
  components: {
    Scroll
  },
  props: {
    category: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('selectItem', index)
    }
  },
}
</script>

<style scoped>
.tab-menu {
  height: calc(100vh - 2.34rem);
  overflow: hidden;
  background: rgb(243, 239, 239);
  font-size: 0.4rem;
  line-height: 1.2rem;
}
.tab-menu .list {
  height: 1.2rem;
}
.active {
  color: var(--color-tint);
  border-left: 2px solid var(--color-tint);
  background: white;
  font-weight: 600;
}
</style>