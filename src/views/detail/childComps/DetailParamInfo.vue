<template>
  <div v-if="Object.keys(goodsParam).length !== 0" class="goods-param">
    <!-- 商品尺码等参数 -->
    <table v-for="(table, index) in goodsParam.sizes" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>
    <!-- 商品风格参数 -->
    <table class="info-param">
      <tr v-for="(info, index) in goodsParam.infos" :key="index">
        <td class="info-param-key">{{ info.key }}</td>
        <td class="param-value">{{ info.value }}</td>
      </tr>
    </table>
    <!-- 如果附带图片，则添加 -->
    <div class="info-img" v-if="goodsParam.image.length !== 0">
      <img :src="goodsParam.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsParam: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}
</script>

<style scoped>
.goods-param {
  padding: 0.666667rem 0.466667rem;
  font-size: 0.426667rem;
  border-bottom: 0.173333rem solid #f2f5f8;
}

.goods-param table {
  width: 100%;
  border-collapse: collapse;
}

.goods-param table tr {
  height: 1.266667rem;
}

.goods-param table tr td {
  border-bottom: 0.030667rem solid rgba(100, 100, 100, 0.1);
}

.info-param-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 3.2rem;
}

.info-param {
  border-top: 0.030667rem solid rgba(0, 0, 0, 0.1);
}

.param-value {
  color: #eb4868;
}

.info-img img {
  width: 100%;
}
</style>