<template>
  <div class="detail">
    <detail-nav-bar ref="nav" @titleClick="tabClick" />
    <scroll
      class="content"
      ref="scrolls"
      :probe-type="3"
      :pull-up-load="true"
      @scrollp="contentp"
    >
      <detail-swiper :swiper-img="topImg" />
      <detail-base-info :good="goods" />
      <detail-shop-info :shop="shops" />
      <detail-goods-desc :detail-info="detailInfos" />
      <detail-param-info ref="param" :goods-param="goodsParams" />
      <detail-comment-info ref="comment" :comment="commentInfo" />
      <goods-list ref="recommend" :good="recommends" />
    </scroll>
    <detail-bottom-bar @addToCart="addCarts" />
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsDesc from './childComps/DetailGoodsDesc.vue'
import DetailParamInfo from './childComps/DetailParamInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'

import GoodsList from '@components/content/goods/GoodsList.vue'
import { ADDCART, ALLCOUNT } from '@store/mutations-types'

import Scroll from '@components/common/scroll/Scroll.vue'
import { getDetail, getRecommend, Goods, Shop, GoodsParam } from '@network/detail'

export default {
  name: "detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsDesc,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar
  },
  data() {
    return {
      // 商品id
      iid: null,
      //   轮播图
      topImg: [],
      //   商品详情
      goods: {},
      // 店铺信息
      shops: {},
      // 商品介绍
      detailInfos: {},
      // 商品参数
      goodsParams: {},
      // 买家评论
      commentInfo: {},
      // 推荐商品
      recommends: [],
      // 标题对应的内容位置
      titleY: [],
      // 内容位置对应的标题索引
      titleIndex: 0

    }
  },
  created() {
    // 将路由上拼接的商品id保存到iid中 ，此处拼接的动态路由的 :id 就是真实的商品id（在接口中表示为iid）
    this.iid = this.$route.params.id
    // 根据商品id获取详情数据
    getDetail(this.iid).then((res) => {
      // console.log(res);
      //   获取轮播图
      const data = res.result
      this.topImg = data.itemInfo.topImages
      //   获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // 获取店铺信息
      this.shops = new Shop(data.shopInfo)
      // 获取商品介绍，（文字介绍和图片试穿）
      this.detailInfos = data.detailInfo
      // 获取商品参数
      this.goodsParams = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      // 获取第一条评论
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
    })
    // 获取推荐数据
    getRecommend().then((res) => {
      // console.log(res);
      this.recommends = res.data.list
    })
  },

  methods: {
    // 点击标题按钮时，获取标题的所有子组件的偏移量offsetTop，并以数组形式存储在data中的titleY[]中
    // 再根据点击的按钮，滚动到对应的内容位置
    tabClick(index) {
      // console.log(this.titleY);
      //根据点击的按钮所对应的offsetTop偏移量， 滚动到标题对应的内容位置
      this.$refs.scrolls.back(0, -this.titleY[index], 300)
    },

    // 得到滚动的位置
    contentp(position) {
      // 由于子组件使用了v-if来判断是否有内容，来动态操作DOM元素决定是否渲染组件，所以子组件的DOM元素
      // 无法在mounted中获取，经过测试，在created中的getDetil()中能获取到数据，但是那是获取到的offsetTop
      // 是DOM元素存在时的高度，那时候图片虽然存在，但是没有加载出来，所以数据是错的， 这段代码放在methods
      // 中就可以拿到正确的offsetTop，但是因为修改标题颜色需要得到this.titleY[]的数据，所以写在这里
      this.titleY = []
      this.titleY.push(0)
      this.titleY.push(this.$refs.param.$el.offsetTop)
      this.titleY.push(this.$refs.comment.$el.offsetTop)
      this.titleY.push(this.$refs.recommend.$el.offsetTop)
      // 给数组多添加一个数据，为最大的数字
      this.titleY.push(Number.MAX_VALUE)

      // console.log(position);

      // 根据滚动的位置修改对应的标题颜色
      // 得到滚动距离的y值
      const positionY = -position.y
      let length = this.titleY.length
      // 因为最后一个数字Number.MAX_VALUE没有遍历的意义，所以此处 i<length-1 
      // 因为有Number.MAX_VALUE，所以下面判断中 this.titleY[i + 1] 中的 [i+1]永远不会越界
      // 判断：如果标题的索引已经和当前遍历到的数字一致的话，说明内容和标题已经对应上了，就不需要后续判断了
      // ，可以减少循环的次数（在标题对应的内容部分来回滚动，只要不超出范围，就只会判断一次）
      // 最后让 i 和DetailNavBar.vue里的currentIndex一致，从而改变标题颜色
      for (let i = 0; i < length - 1; i++) {
        if (this.titleIndex !== i && (positionY >= this.titleY[i] && positionY < this.titleY[i + 1])) {
          this.titleIndex = i
          // console.log(this.titleIndex);
          this.$refs.nav.currentIndex = this.titleIndex
        }
      }
    },
    addCarts() {
      // 将所有需要添加的信息放在对象中
      const product = {}
      product.id = this.iid
      product.image = this.topImg[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      // 将信息传递给vuex
      this.$store.dispatch(ADDCART, product).then((res) => {
        this.$toast.show(res, 700)
      })
      this.$store.commit(ALLCOUNT)
    }

  },
}
</script>

<style scoped>
.detail {
  position: relative;
  height: 100vh;
  z-index: 6;
  background-color: #fff;
}
.content {
  height: calc(100% - 1.3rem);
  overflow: hidden;
}
</style>