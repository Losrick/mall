<template>
  <div class="bottom">
    <div class="all">
      <cart-check-button
        @click.native="btnClick"
        :isChecked="isSelectAll"
      />全选
    </div>
    <div class="total">合计￥ {{ totalPrice }}</div>
    <div class="check" @click="checkClick">去结账（{{ totalCount }}）</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartCheckButton from './CartCheckButton.vue'
export default {
  components: {
    CartCheckButton
  },
  computed: {
    ...mapGetters([
      'cartList'
    ]),
    totalPrice() {
      return this.cartList.filter((item) => {
        return item.checked
      }).reduce((tmp, value) => {
        return tmp + value.price * value.count
      }, 0).toFixed(2)
    },
    totalCount() {
      return this.cartList.filter((item) => {
        return item.checked
      }).reduce((tmp, value) => {
        return tmp + value.count
      }, 0)
    },
    // 如果数组中没有商品，则返回false
    // 当查找到数组中第一个没有被选中的商品时，返回false，如果所有商品都被选中，则返回true
    isSelectAll() {
      return (this.cartList.length == 0) ? false : this.cartList.every((item) => item.checked)
      // if (this.cartList.length == 0) return false
      // return this.cartList.every((item) => {
      //   return item.checked
      // })
    }
  },
  methods: {
    btnClick() {
      if (this.isSelectAll) {
        for (let item of this.cartList) {
          item.checked = false
        }
      } else {
        for (let item of this.cartList) {
          item.checked = true
        }
      }
    },
    checkClick() {
      if (this.totalCount == 0) {
        this.$toast.show("未选中任何商品", 1000)
      }
    }
  },
}
</script>

<style scoped>
.bottom {
  position: fixed;
  display: flex;
  width: 100%;
  height: 1rem;
  bottom: 1.26rem;
  padding-left: 0.133333rem;
  background: rgb(236, 236, 236);
  font-size: 0.466667rem;
  line-height: 1rem;
  justify-content: space-between;
}
.bottom .all {
  display: flex;
}
.bottom .total {
  width: 3.5rem;
}
.bottom .check {
  width: 3rem;
  background: orangered;
  color: white;
  text-align: center;
}
</style>