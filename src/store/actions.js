import { ADDCART, ADDCOUNT, ADDPRODUCT } from '@store/mutations-types'

export default {

  // payload:Detail.vue传递过来的product对象
  [ADDCART](context, payload) {
    return new Promise((resolve) => {
      // 每次点击添加到购物车时，查找cartList中是否有id相同的商品，并返回符合条件的cartList中的对象
      let products = context.state.cartList.find((item) => {
        return item.id == payload.id
      })

      //  console.log(payload);
      //  console.log(products);
      // 如商品已经存在，则让已经存在的商品对象中的属性count+1；
      // products：已经存在的商品对象，该对象和payload的区别是：products已经有一个count=number的属性了，
      // 只有products才能在不创建count的情况下,直接给 count+1，所以此处必须将products当参数传递给mutations  
      if (products) {
        context.commit(ADDCOUNT, products)
        resolve("商品数量+1")
      } else {
        // 如商品不存在，则为商品添加一个count属性，让其初始值值为1，并添加一个新商品对象到数组中
        // 这里的payload是一个新对象，原本是没有count的，需要添加count属性，在发送给mutations
        payload.count = 1
        context.commit(ADDPRODUCT, payload)
        resolve("加入购物车成功")
      }
    })

  }
}