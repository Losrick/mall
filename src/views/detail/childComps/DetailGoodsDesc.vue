<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <!-- 文字介绍 -->
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <!-- 试穿图片 -->
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :src="item"
        alt=""
        :key="index"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },

}
</script>

<style scoped>
.goods-info {
  padding: 0.666667rem 0;
  border-bottom: 0.173333rem solid #f2f5f8;
}

.info-desc {
  padding: 0 0.453333rem;
}

.info-desc .start,
.info-desc .end {
  width: 2.666667rem;
  height: 0.033333rem;
  background-color: #a3a3a5;
  position: relative;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}

.info-desc .start::before,
.info-desc .end::after {
  content: "";
  position: absolute;
  width: 0.173333rem;
  height: 0.173333rem;
  background-color: #333;
  bottom: 0;
}

.info-desc .end::after {
  right: 0;
}

.info-desc .desc {
  padding: 0.44rem 0;
  font-size: 0.44rem;
}

.info-key {
  margin: 0.306667rem 0 0.293333rem 0.466667rem;
  color: #333;
  font-size: 0.466667rem;
}
/* .info-list {
  display: flex;
  flex-direction: column;
  align-items: center;
} */
.info-list img {
  width: 95%;
}
</style>

