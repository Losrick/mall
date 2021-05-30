import Toast from './Toast.vue'

const obj = {}

obj.install = function (Vue) {
    // 创建组件构造器，传入Toast对象
    const toastConstructor = Vue.extend(Toast)

    // 创建组件对象
    const toast = new toastConstructor()

    // 挂载组件对象到自定义元素div上
    toast.$mount(document.createElement('div'))

    // 将自定义的元素div添加到body中
    document.body.appendChild(toast.$el)

    // 将toast对象添加到Vue的原型中
    Vue.prototype.$toast = toast
}
export default obj