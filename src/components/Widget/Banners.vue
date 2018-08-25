<template>
  <div>
    <ul class="banner-list">
      <li class="banner-item"
        v-for="(item, index) in items"
        :key="index"
      >
        <img class="banner-image" :src="item.image" width="300px;" height="auto">
      </li>
    </ul>
  </div>
</template>

<script>
import WidgetBase from './Base'

export default {
  extends: WidgetBase
}
</script>

<style lang="scss" scoped>
.banner-list {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-x: auto;
  display: flex;
}

.banner-item {
  margin-right: 10px;
}
</style>
