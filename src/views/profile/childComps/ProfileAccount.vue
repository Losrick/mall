<template>
  <div class="profile-account">
    <div class="balance flex border">
      <div class="b-number"><span>0.00 </span> 元</div>
      <div>我的余额</div>
    </div>
    <div class="discount flex border">
      <div class="d-number"><span>0</span> 个</div>
      <div>我的优惠</div>
    </div>
    <div class="integral flex">
      <div class="i-number"><span>0</span> 分</div>
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.profile-account {
  display: flex;
  height: 2rem;
  font-size: 0.5rem;
  background: white;
  box-sizing: content-box;
  border-bottom: 0.35rem solid rgb(226, 225, 225);
  justify-content: space-evenly;
  text-align: center;
}
.profile-account span {
  color: red;
  font-size: 0.7rem;
}
.border {
  border-right: 1px solid #ccc;
}
.flex {
  flex: 1;
}
</style>