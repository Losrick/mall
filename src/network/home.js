import {request} from './request'

// 获取轮播图图片和推荐信息
export function getHomeMultiData(){
return request({
    url:'/home/multidata'
})
}
// 获取商品信息
// 参数 type：商品类型，例：home页面有3种类型，会根据不同类型传进来的参数获取不同的信息
// 参数 page：商品页码
export function getHomeGoods(type,page) {
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
  }