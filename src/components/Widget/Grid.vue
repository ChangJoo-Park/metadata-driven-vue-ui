<template>
  <div class="wrapper">
    <div class="box"
      v-for="(item, index) in items"
      :key="index"
    >
      <v-icon :name="item.image"></v-icon>
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import WidgetBase from './Base'

export default {
  extends: WidgetBase
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  border: 1px solid black;
  border-right: none;
  border-bottom: none;
}
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;

  &:last-child {
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  }

  .icon {
    width: 40px;
  }
}
</style>
