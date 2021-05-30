<template>
  <div class="check-btn" :class="{ active: isChecked }"></div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style scoped>
.check-btn {
  height: 0.6rem;
  width: 0.6rem;
  margin: 0 0.1rem;
  border: 0.5px solid var(--color-text);
  border-radius: 50%;
  align-self: center;
}
.active {
  border: 0.5px solid red;
  background: red url("../../../assets/img/cart/tick.svg") no-repeat center;
}
</style>