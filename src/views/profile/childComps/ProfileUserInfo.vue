<template>
  <div class="user-info">
    <div class="portrait">
      <img src="@assets/img/user/user.jpg" alt="" />
    </div>

    <div class="login">
      <div class="user-name">登录/注册</div>
      <div class="user-phone">
        <i class="fa fa-mobile-phone fa-lg"></i> 暂无绑定手机号
      </div>
    </div>

    <div class="more"><img src="@assets/img/common/back.svg" alt="" /></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.user-info {
  display: flex;
  color: white;
  background: var(--color-tint);
}
.user-info .portrait {
  width: 2rem;
  height: 2rem;
  margin: 0.5rem;
  overflow: hidden;
  border-radius: 50%;
}
.portrait img {
  width: 100%;
}
.login {
  flex: 8;
  display: flex;
  flex-flow: column;
  justify-content: center;
}
.user-name {
  font-size: 0.6rem;
}
.user-phone {
  font-size: 0.5rem;
}
.more {
  margin-right: 0.3rem;
  line-height: 3rem;
  background: var(--color-tint);
}
.more img {
  width: 100%;
  transform: rotate(180deg);
}
</style>