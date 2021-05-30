import { request } from './request'

// 商品分类
export function getCategorys() {
    return request({
        url: '/category'
    })
}
// 商品详细信息
export function getDetailCategory(maitKey) {
    return request({
        url: '/subcategory',
        params: {
            maitKey
        }
    })
}