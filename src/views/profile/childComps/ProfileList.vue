<template>
  <div class="profile-list">
    <div class="list" v-for="item in listData" :key="item.index">
      <i :class="item.icon" class="icon"></i><span>{{ item.info }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listData: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.profile-list {
  font-size: 0.5rem;
}
.profile-list .list {
  height: 1rem;
  padding-left: 0.4rem;
  border-bottom: 1px solid #ccc;
  line-height: 1rem;
}
.profile-list .list:last-child {
  border: none;
}
.profile-list .icon {
  margin-right: 0.2rem;
  color: #ff8198;
  vertical-align: text-top;
}
</style>