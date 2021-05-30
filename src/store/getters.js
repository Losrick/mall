export default {
    // 获取购物车内所有商品对象
    cartList(state) {
        return state.cartList
    },
    // 获取购物车内所有商品数量
    allCount(state){
        return state.sumCount
    }
}