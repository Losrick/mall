<template>
  <div class="product-item">
    <cart-check-button :isChecked="product.checked" @click.native="btnClick" />
    <div class="image">
      <img :src="product.image" alt="商品图片" />
    </div>
    <div class="info">
      <div class="title">{{ product.title }}</div>
      <div class="desc">商品描述：{{ product.desc }}</div>
      <div class="pAc">
        <div class="price">¥{{ product.price }}</div>
        <div class="count">x{{ product.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CartCheckButton from './CartCheckButton.vue'
export default {
  components: { CartCheckButton },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    // 切换选中状态
    btnClick() {
      this.product.checked = !this.product.checked
    }
  },
}
</script>

<style scoped>
.product-item {
  display: flex;
  width: 100%;
  height: 4rem;
  padding: 0.180033rem 0;
  border-bottom: 1px solid var(--color-text);
}

.image {
  flex: 1;
}
.image img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.info {
  flex: 2;
  display: flex;
  width: 50%;
  flex-flow: column;
  padding: 0 0.263333rem;
  font-size: 0.606667rem;
}
.info .title {
  flex: 1;
  overflow: hidden;
  line-height: 1rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.info .desc {
  flex: 1;
  font-size: 0.456667rem;
  overflow: hidden;

  line-height: 1rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.info .pAc {
  flex: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pAc .price {
  color: var(--color-tint);
}
</style>