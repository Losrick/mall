<template>
  <div id="profile">
    <nav-bar class="profile-nav"><div slot="center">我的档案</div></nav-bar>
    <scroll class="content" :probe-type="3" :pull-up-load="true">
      <profile-user-info />
      <profile-account />
      <profile-list class="order-list" :list-data="orederList" />
      <profile-list :list-data="serviceList" />
    </scroll>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import ProfileAccount from './childComps/ProfileAccount.vue'
import ProfileList from './childComps/ProfileList.vue'
import ProfileUserInfo from './childComps/ProfileUserInfo.vue'
export default {
  components: {
    NavBar,
    ProfileUserInfo,
    ProfileList,
    ProfileAccount,
    Scroll
  },
  data() {
    return {
      orederList: [
        { icon: 'fa fa-envelope-o fa-0.4lg', info: '我的消息' },
        { icon: 'fa fa-database fa-0.4lg', info: '积分商城' },
        { icon: 'fa fa-vcard-o fa-0.4lg', info: '会员卡' },
      ],
      serviceList: [
        { icon: 'fa fa-shopping-cart fa-0.4lg', info: '我的购物车' },
        { icon: 'fa fa-rmb fa-0.4lg', info: '下载京东钱包' },
      ]
    }
  },
}
</script>

<style scoped>
#profile {
  height: calc(100vh - 1.3rem);
  overflow: hidden;
}
.content {
  height: 100%;
  overflow: hidden;
}
.profile-nav {
  font-size: 0.7rem;
  background-color: var(--color-tint);
  color: white;
}
.order-list {
  box-sizing: content-box;
  border-bottom: 0.35rem solid rgb(226, 225, 225);
}
</style>