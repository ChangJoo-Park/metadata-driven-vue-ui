<template>
  <div>
    <ul class="list">
      <li class="list-item"
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="list-image-wrapper">
          <img class="list-image" :src="item.image">
        </div>
        <div class="list-meta">
          <h3 class="list-header">{{ item.title }}</h3>
          <p class="list-description">{{ item.description }}</p>
        </div>
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
.list {
  list-style: none;
  margin: 0;
  padding: 0 ;
}

.list-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem;
}

.list-image-wrapper {
  flex: 1;
  margin-right: 1rem;
}
.list-image {
  width: 100%;
}

.list-meta {
  flex: 3;
}

.list-description {
  margin: 0;
}

.list-header {
  margin: 0;
}
</style>
