import Vue from 'vue'
import VueRouter from 'vue-router'

// const Home = () => import("../views/home/Home.vue");
// const Category = () => import('../views/category/Category.vue');
// const Cart = () => import('../views/cart/Cart.vue');
// const Profile = () => import("../views/profile/Profile.vue")
Vue.use(VueRouter)

// 此项目TabBarItem.vue中是使用replace传递路径，所以需要用replace参数来阻止路由重复点击
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
}
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}
const routes = [
  {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name:'Home',
      component: () => import("@views/home/Home.vue")
    },
    {
      path: '/category',
      name:'Category',
      component: () => import('@views/category/Category.vue')
    },
    {
      path: '/cart',
      name:'Cart',
      component: () => import('@views/cart/Cart.vue')
    },
    {
      path: '/profile',
      name:'Profile',
      component:  () => import("@views/profile/Profile.vue")
    },
    {
      path: '/detail/:id',
      name:'Detail',
      component:() => import("@views/detail/Detail.vue")
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
