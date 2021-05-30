<template>
  <div v-if="Object.keys(shop).length !== 0" class="info">
    <!-- 店铺名称 -->
    <div class="top">
      <img :src="shop.logo" />
      <span class="title">{{ shop.name }}</span>
    </div>
    <!-- 销量信息 -->
    <div class="middle">
      <div class="middle-item middle-left">
        <div class="sells">
          <div class="sells-count">
            {{ shop.sells | sellCountFilter }}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="goods">
          <div class="sells-count">
            {{ shop.goodsCount }}
          </div>
          <div class="sells-text">全部宝贝</div>
        </div>
      </div>
      <!-- 店铺评分 -->
      <div class="middle-item middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'better-more': item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  //   过滤总销量
  filters: {
    sellCountFilter(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万"
    }
  },
}
</script>

<style scoped>
.info {
  padding: 0.693333rem 0.266667rem;
  border-bottom: 0.16rem solid #f2f5f8;
  /* height: 1000px; */
}

.top {
  line-height: 1.333333rem;
  /* 让元素垂直中心对齐 */
  display: flex;
  align-items: center;
}

.top img {
  width: 1.333333rem;
  height: 1.333333rem;
  border-radius: 50%;
  border: 0.033333rem solid rgba(0, 0, 0, 0.1);
}

.top .title {
  margin-left: 0.306667rem;
  font-size: 0.386667rem;
  /* vertical-align: center; */
}

.middle {
  margin-top: 0.466667rem;
  display: flex;
  align-items: center;
}

.middle-item {
  flex: 1;
}

.middle-left {
  display: flex;
  justify-content: space-evenly;
  color: #333;
  text-align: center;
  border-right: 0.029333rem solid rgba(0, 0, 0, 0.1);
}

.sells-count,
.goods-count {
  font-size: 0.533333rem;
}

.sells-text,
.goods-text {
  margin-top: 0.333333rem;
  font-size: 0.373333rem;
}

.middle-right {
  font-size: 0.4rem;
  color: #333;
}

.middle-right table {
  width: 4.373333rem;
  margin-left: 0.933333rem;
}

.middle-right table td {
  padding: 0.173333rem 0;
}

.middle-right .score {
  color: #5ea732;
}

.middle-right .score-better {
  color: #f13e3a;
}

.middle-right .better span {
  background-color: #5ea732;
  color: #fff;
  text-align: center;
}

.middle-right .better-more span {
  background-color: #f13e3a;
}

.bottom {
  text-align: center;
  margin-top: 0.306667rem;
}

.enter-shop {
  display: inline-block;
  font-size: 0.426667rem;
  background-color: #f2f5f8;
  width: 4.666667rem;
  height: 0.933333rem;
  text-align: center;
  line-height: 0.933333rem;
  border-radius: 10px;
}
</style>