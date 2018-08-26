<template>
  <div class="wrapper">
    <div class="box"
      v-for="(item, index) in items"
      :key="index"
    >
      <img class="box-image" :src="item.image" alt="" width="100%;" height="100%;">
      <h4>
        {{ item.title }}
      </h4>
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
  grid-template-columns: repeat(2, 1fr);
}
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: .5rem;

  h4 {
    margin-top: .5rem;
  }
  img {
    border-radius: 1rem;
    height: 100px;
  }
}

</style>
