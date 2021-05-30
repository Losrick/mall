<template>
  <!-- 判断传进来的good是不是一个空对象，如果是，则说明good中没有任何数据，则后续详细信息可以不显示 -->
  <div v-if="Object.keys(good).length !== 0" class="base-content">
    <div class="title">{{ good.title }}</div>
    <!-- 价格 -->
    <div class="price">
      <span class="new-price">{{ good.newPrice }}</span>
      <span class="old-price">{{ good.oldPrice }}</span>
      <span class="discount">{{ good.discount }}</span>
    </div>
    <!-- 其他信息：销量，收藏，等 -->
    <div class="other">
      <span>{{ good.columns[0] }}</span>
      <span>{{ good.columns[1] }}</span>
      <span>{{ good.services[good.services.length - 1].name }}</span>
    </div>
    <!-- 服务保障 -->
    <!-- v-for="index in good.services.length" 遍历good.service中从1开始到length的所有数据 -->
    <div class="service">
      <span
        class="service-item"
        v-for="index in good.services.length - 1"
        :key="index"
      >
        <img :src="good.services[index - 1].icon" />
        <span>{{ good.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    good: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}
</script>

<style scoped>
.base-content {
  margin-top: 0.4rem;
  padding: 0 0.266667rem;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
  /* height: 1000px; */
}

.title {
  font-size: 0.386667rem;
  color: #222;
}

.price {
  margin-top: 0.333333rem;
}

.price .new-price {
  font-size: 0.65rem;
  color: var(--color-high);
}

.price .old-price {
  font-size: 0.4rem;
  margin-left: 0.16rem;
  text-decoration: line-through;
}

.price .discount {
  font-size: 0.38rem;
  padding: 0.066667rem 0.16rem;
  color: #fff;
  background-color: var(--color-high);
  border-radius: 8px;
  margin-left: 0.16rem;

  /*让元素上浮一些: 使用相对定位即可*/
  position: relative;
  top: -0.266667rem;
}

.other {
  margin-top: 0.466667rem;
  line-height: 0.866667rem;
  display: flex;
  font-size: 0.4rem;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  justify-content: space-between;
}

.service {
  display: flex;
  justify-content: space-between;
  line-height: 1.733333rem;
}
.service-item {
  display: flex;
  align-items: center;
}
.service-item img {
  width: 0.4rem;
  height: 0.4rem;
}

.service-item span {
  font-size: 0.386667rem;
  color: #333;
}
</style>