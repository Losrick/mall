<template>
  <div class="good-list-item" @click="itemClick">
    <img :src="showImg" alt="" />
    <div>
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span
      ><span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return []
      }
    },
  },
  // 该组件在Detail.vue和Home.vue中都有用，但是两者的图片数据名不同，需要判断是哪种数据类型，再将其展示
  computed: {
    showImg() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  },
}
</script>

<style scoped>
.good-list-item {
  width: 48%;
  font-size: 0.266667rem;
  text-align: center;
}
img {
  width: 100%;
}
/* 文字只显示一行 */
p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.price {
  color: var(--color-tint);
  margin-right: 0.466667rem;
}

.collect {
  position: relative;
}
/* 星号 */
.collect::before {
  content: "";
  position: absolute;
  left: -0.366667rem;
  width: 0.393333rem;
  height: 0.393333rem;
  /* 图片右移1px ，下移1px ，图片大小14px */
  background: url("../../../assets/img/common/collect.svg") no-repeat 0.024rem
    0.03rem/0.293333rem;
}
</style>