<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <tab-menu
        class="tab-menu"
        :category="categorys"
        @selectItem="selectItems"
      />
      <category-detail class="detail" :detailCategory="detailCategorys" />
    </div>
  </div>
</template>

<script>
import NavBar from '@components/common/navbar/NavBar.vue'
import TabMenu from './childComps/TabMenu.vue'

import { getCategorys, getDetailCategory } from '@network/category'
import CategoryDetail from './childComps/CategoryDetail.vue'

export default {
  components: {
    NavBar,
    TabMenu,
    CategoryDetail,

  },
  data() {
    return {
      // 商品分类
      categorys: [],
      // 每一类商品的详细列表
      detailCategorys: [],
    }
  },
  created() {
    this.getCategory()
    // 初始页面
    this.selectItems1(3627)
  },

  methods: {
    // 获取商品数据
    getCategory() {
      getCategorys().then((res) => {
        // console.log(res);
        this.categorys = res.data.category.list
      })
    },
    // 获取指定的商品详细数据
    selectItems(index) {
      const detailKey = this.categorys[index].maitKey
      getDetailCategory(detailKey).then((res) => {
        console.log(res.data.list);
        this.detailCategorys = res.data.list
      })
    },
    // 获取默认的商品详细数据
    selectItems1(index) {
      getDetailCategory(index).then((res) => {
        this.detailCategorys = res.data.list
      })
    }
  },
}
</script>

<style scoped>
/* #category {
  height: 100%;
} */
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 0.7rem;
  box-shadow: none;
}
.content {
  display: flex;
  text-align: center;
}
.tab-menu {
  width: 3rem;
}
.detail {
  flex: 1;
}
</style>