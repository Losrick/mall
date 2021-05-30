<template>
  <div class="bottom-bar">
    <div class="flex font">
      <div class="bgone bgs width"></div>
      <span>客服</span>
    </div>
    <div class="flex font">
      <div class="bgtwo bgs width"></div>
      <span>店铺</span>
    </div>
    <div class="flex font">
      <div class="bgthree bgs width"></div>
      <span>收藏</span>
    </div>
    <div class="add text-height" @click="addToCart">加入购物车</div>
    <div class="buy text-height">购买</div>
  </div>
</template>

<script>
export default {
  methods: {
    //   商品在Detail.vue中才能获取，所以需要把事件传出去
    addToCart() {
      this.$emit('addToCart')
    }
  },
}
</script>

<style >
.bottom-bar {
  display: flex;
  position: fixed;
  bottom: 0rem;
  left: 0;
  right: 0;
  height: 1.3rem;
  font-size: 0.44rem;
  color: var(--color-text);
  background-color: white;
  justify-content: center;
}

.bottom-bar .flex {
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.bottom-bar .add {
  flex: 2;
  background: rgb(255, 217, 0);
}
.bottom-bar .buy {
  flex: 1.5;
  color: white;
  background: var(--color-tint);
}
.bottom-bar .font {
  font-size: 0.34rem;
}
.bottom-bar .text-height {
  line-height: 1.4rem;
  text-align: center;
}
.bottom-bar .width {
  width: 50%;
  height: 50%;
}
.bottom-bar .bgs {
  background: url("../../../assets/img/detail/detail_bottom.png") no-repeat;
  background-size: 0.6rem;
}
.bottom-bar .bgone {
  background-position: center -1.4rem;
}
.bottom-bar .bgtwo {
  background-position: center -2.65rem;
}
.bottom-bar .bgthree {
  background-position: center 0.05rem;
}
</style>