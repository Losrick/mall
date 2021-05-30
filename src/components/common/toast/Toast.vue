<template>
  <div class="toast" v-show="isShow" :class="{ block: this.isBlock }">
    <div class="message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      isShow: false,
      isBlock: false
    }
  },
  methods: {


    show(message = '未设置展示文字', duraction = 1000) {
      this.isShow = true,
        this.message = message,
        this.isBlock = true
      setTimeout(() => {

        this.isShow = false,
          this.message = ""
      }, duraction)
    }
  },
}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 0.233333rem;
  transform: translate(-50%);
  color: #fff;
  border-radius: 0.14rem;
  font-size: 0.606667rem;
  background: rgba(0, 0, 0, 0.6);
  text-align: center;
  z-index: 999;
}
.toast .message {
  white-space: nowrap;
}
@keyframes block {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.block {
  animation: block 0.2s linear 1 forwards;
}
</style>