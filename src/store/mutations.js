import { ADDCOUNT, ADDPRODUCT, ALLCOUNT } from '@store/mutations-types'

export default {
  // 该商品数量+1
  // 相当于：products.count++
  [ADDCOUNT](state, payload) {
    payload.count++
  },
  // 添加新商品对象到cartList[]数组
  [ADDPRODUCT](state, payload) {
    // 给新商品添加checked属性，用于修改购物车内商品的选中状态
    payload.checked = true
    state.cartList.push(payload)
  },
  // 商品总数量+1
  [ALLCOUNT](state) {
    state.sumCount++
  },

}