<template>
  <div v-if="Object.keys(comment).length !== 0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        <!-- 更多评论 -->
        <div>更多</div>
      </div>
    </div>
    <!-- 用户信息 -->
    <div class="info-user">
      <img :src="comment.user.avatar" alt="" />
      <span>{{ comment.user.uname }}</span>
    </div>
    <!-- 评论主体 -->
    <div class="info-detail">
      <p>{{ comment.content }}</p>
      <div class="info-other">
        <span class="date">{{ comment.created | showDate }}</span>
        <span>{{ comment.style }}</span>
      </div>
      <!-- 买家秀 -->
      <div class="info-imgs">
        <img :src="item" v-for="(item, index) in comment.images" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import { getTime } from '@common/utils'
export default {
  props: {
    comment: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  //   将毫秒转化为时间
  filters: {
    showDate(value) {
      return getTime(value)
      // 使用自定义时间格式输出时间（还没导入该函数）
      // let date = new Date(value * 1000);
      // return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
.comment-info {
  padding: 0.16rem 0.346667rem;
  color: #333;
  border-bottom: 0.16rem solid #f2f5f8;
}

.info-header {
  height: 1.733333rem;
  line-height: 1.733333rem;
  border-bottom: 0.029333rem solid rgba(0, 0, 0, 0.1);
}

.header-title {
  float: left;
  font-size: 0.453333rem;
}

.header-more {
  float: right;
  margin-right: 0.306667rem;
  font-size: 0.4rem;
}

.info-user {
  padding: 0.306667rem 0 0.16rem;
}

.info-user img {
  width: 1.333333rem;
  height: 1.333333rem;
  border-radius: 50%;
}

.info-user span {
  position: relative;
  font-size: 0.48rem;
  top: -0.453333rem;
  margin-left: 0.306667rem;
}

.info-detail {
  padding: 0 0.16rem 0.48rem;
}

.info-detail p {
  font-size: 0.44rem;
  color: #777;
  line-height: 1.5;
}

.info-detail .info-other {
  font-size: 0.373333rem;
  color: #999;
  margin-top: 0.306667rem;
}

.info-other .date {
  margin-right: 0.253333rem;
}

.info-imgs {
  margin-top: 0.32rem;
}

.info-imgs img {
  width: 2.266667rem;
  height: 2.266667rem;
  margin-right: 0.173333rem;
}
</style>