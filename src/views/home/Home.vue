<template>
  <!-- <h2>首页</h2> -->
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <tab-control
      ref="tabControl1"
      :title="['流行', '新款', '精品']"
      @tabClick="titleClick"
      v-show="isTabShow"
    />
    <scroll
      class="contet"
      ref="scrolls"
      :probe-type="3"
      :pull-up-load="true"
      @scrollp="contentp"
      @pullingUpp="loadMore"
    >
      <home-swiper :banner="banners" @swiperImgLoad="imageLoad" />
      <recommend-view :recommend="recommends" />
      <feature-view />
      <tab-control
        ref="tabControl2"
        :title="['流行', '新款', '精品']"
        @tabClick="titleClick"
      />
      <goods-list :good="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import { debounce, throttle } from '@common/utils'
// 导入导航栏
import NavBar from '@components/common/navbar/NavBar'
// 导入tabControl页面
import TabControl from '@components/content/tabControl/TabControl.vue'
// 导入商品列表
import GoodsList from '@components/content/goods/GoodsList.vue'
// 导入滚动组件
import Scroll from '@components/common/scroll/Scroll'
// 到入返回顶端组件
import BackTop from '@components/content/backTop/BackTop'


// 导入home页面的轮播图
import HomeSwiper from './childComps/HomeSwiper.vue'
// 导入推荐页
import RecommendView from './childComps/RecommendView'
// 导入feature页面
import FeatureView from './childComps/FeatureView.vue'


// 导入home页面的网络请求方法
import { getHomeMultiData, getHomeGoods } from '@network/home'


export default {
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    HomeSwiper,
    RecommendView,
    FeatureView,
    getHomeMultiData,

  },

  data() {
    return {
      // 轮播图片
      banners: [],
      // 推荐信息
      recommends: [],
      // 商品清单
      // 用page记录浏览到了哪一页商品，list存储商品信息
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      // home页面tab-control模块的激活种类,初始值为'pop'
      currentType: 'pop',
      // BackTop组件是否显示
      isShowBackTop: false,
      // Tabcontrol组件距离顶部的偏移距离
      tabOffsetTop: 0,
      // TabControl组件是否显示
      isTabShow: false,
      // 页面当前滚动的距离
      saveY: 0
    }
  },
  // 页面创建时调用
  created() {
    /** 
     * 当页面创建时，调用this.getHomeData()方法，会转到methods:{}中调用getHomeMultiData()，
     * 该函数会去home.js中返回一个request函数，而requset函数 来自于request.js中，
     * 相当于调用request.js中的request(config)函数，此函数会返回一个Promise函 数instance1(config)，
     * 最终再回到Home.vue这里调用.then()函数将返回值进行处理
    */
    this.getHomeData()

    /** 
     *  请求商品数据
    */
    this.getHomeGood('pop')
    this.getHomeGood('new')
    this.getHomeGood('sell')
  },
  // 当进入该页面时自动调用
  // 滚动到上次位置
  activated() {
    this.$refs.scrolls.back(0, this.saveY, 100)

  },
  // 离开该页面时调用
  // 保存滚动的位置
  deactivated() {
    this.saveY = this.$refs.scrolls.getScrollY()

  },
  computed: {
    // 将<goods-list>中 :good="goods['currentType'].list封装成计算属性，简化代码
    // 把相对应的商品列表传到GoodList.vue中
    showGoods() {
      return this.goods[this.currentType].list
    },
  },
  methods: {
    /**
    * 事件监听方法
    */
    // 接收TabControl中传递过来的index的值，决定<goods-list>中 :good="goods['currentType'].list传递给
    // 商品种类页面GoodsList.vue 的商品种类是什么
    titleClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      // 让2个tabControl组件的激活的类别保持一致
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    // 防抖函数的调用
    // titleClick: debounce(function () {
    //   this.print()
    // }, 500),
    // 节流函数的调用
    // titleClick: throttle(function () {
    //   this.print()
    // }, 2000, { leading: true, trailing: false }),
    print() {
      console.log("点击");
    },
    // 监听组件点击事件，调用<scroll>组件中的回到顶部方法
    backClick() {
      this.$refs.scrolls.back(0, 0, 300)
    },
    // 接受滚动位置，并判断是否显示backtop组件
    contentp(position) {
      // console.log(position);
      this.isShowBackTop = (-position.y) > 100 ? true : false
      //当滚动区域移动距离大于tabControl组件的初始位置时,也就是组件将要移动到顶端不见时,让组件的复制体显示
      this.isTabShow = (-position.y) > this.tabOffsetTop ? true : false
    },
    // 上拉加载更多元素
    loadMore() {
      // console.log("11");
      this.getHomeGood(this.currentType)
      this.$refs.scrolls.load()
    },

    imageLoad() {
      // 当轮播图加载完毕后，获取 滚动区域内 的tabControl组件的顶部偏移量offsetTop
      // 用于和图片滚动距离position.y作比较 来判断组件是否滚动到顶端，快要消失了，如果是，则显示组件的复制体
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      // console.log(this.tabOffsetTop);
    },
    /**
    * 网路请求方法
    */
    getHomeData() {
      getHomeMultiData().then((res) => {
        // console.log(res);
        // 用一个变量将返回的结果保存起来，函数执行完毕数据就会销毁，所以需要保存
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    // 每次调用该方法时，会获取当前页面的下一页数据，并与当前页面的数据整合成同一个数组
    getHomeGood(type) {
      const nowPage = this.goods[type].page + 1
      getHomeGoods(type, nowPage).then((res) => {
        // console.log(res);
        // 整合多个数组成一个（把请求到的格式为数组的商品清单添加到goods对象中的list[]中）
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page++

      })
    },

  }
}

</script>

// 此处定义的CSS样式只会在home页面有效
<style scoped>
#home {
  height: 100vh;
}
.home-nav {
  /* position: sticky;
  top: 0;
  z-index: 1;*/
  font-size: 0.7rem;
  background-color: var(--color-tint);
  color: white;
}
.contet {
  /* 想要滚动区域能适配不同大小屏幕，需要设置最外层视口（此处为#home{height：100vh}） */
  height: calc(100% - 1.3rem);
  overflow: hidden;
}
</style>