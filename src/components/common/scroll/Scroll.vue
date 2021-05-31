<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null,

    }
  },

  mounted() {
    //在mounted函数中无法通过$ref获取到DOM元素，但是使用 $nextTick 则可以
    // $nextTick函数是在下次 DOM 更新循环结束之后执行延迟回调，可以在回调中获取更新后的 DOM
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        observeDOM: true,
        observeImage: true,
        mouseWheel: true,
        // 是否开启滚动监听  0,1：不开启监听  2:不监听惯性滚动（鼠标离开后停止监听） 3:监听所有形式的滚动（默认值）
        // 滚动监听决定着是否能获取到页面滚动的距离
        probeType: this.probeType,
        // 是否开启上拉加载
        pullUpLoad: this.pullUpLoad
      }),
        // this.scroll.refresh();
        //   监听滚动位置 
        this.scroll.on("scroll", (position) => {
          // console.log(position);
          // 将滚动位置发送出去，谁导入该组件，谁就可以获取到position
          this.$emit('scrollp', position);
        })
      //回到顶部的方法
      // 将方法封装到methods中（本来写在此处）
      // this.scroll.scrollTo()
      // 监听上拉事件
      this.scroll.on('pullingUp', () => {
        // console.log("111");   
        this.$emit('pullingUpp')
        // 终止本次上拉加载事件，准备好下一次上拉加载事件的进行（封装到methods中）
        // this.scroll.finishPullUp()
      })
    })

  },
  methods: {
    // 调用回到顶部的方法
    // 回到X：0 Y：0的位置  动画速度默认值为300ms
    back(left, top, time) {
      this.scroll && this.scroll.scrollTo(left, top, time)
    },
    load() {
      this.scroll && this.scroll.finishPullUp()
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 10
    }
  }
}
</script>

<style scoped>
</style>