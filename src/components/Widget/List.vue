<template>
  <div>
    <ul class="list">
      <li class="list-item">
        <div class="list-image-wrapper">
          <img class="list-image" src="//image.goodchoice.kr/resize_1000X500x0/adimg_new/6310/0/5743b189bf666.jpg">
        </div>
        <div class="list-meta">
          <h3 class="list-header">Hello</h3>
          <p class="list-description">Lorem Ipsum is simply dummy text of the printing</p>
        </div>
      </li>
      <li class="list-item">
        <div class="list-image-wrapper">
          <img class="list-image" src="https://image.goodchoice.kr/resize_1000X500x0/adimg_new/12400/0/586dad5232446.jpg">
        </div>
        <div class="list-meta">
          <h3 class="list-header">Hello</h3>
          <p class="list-description">Lorem Ipsum is simply dummy text of the printing</p>
        </div>
      </li>
      <li class="list-item">
        <div class="list-image-wrapper">
          <img class="list-image" src="https://image.goodchoice.kr/resize_1000X500x0/adimg_new/52083/0/5b07c3bb35e30.jpg">
        </div>
        <div class="list-meta">
          <h3 class="list-header">Hello</h3>
          <p class="list-description">Lorem Ipsum is simply dummy text of the printing</p>
        </div>
      </li>
      <li class="list-item">
        <div class="list-image-wrapper">
          <img class="list-image" src="https://image.goodchoice.kr/resize_1000X500x0/adimg_new/6337/0/578dc0855e11b.jpg">
        </div>
        <div class="list-meta">
          <h3 class="list-header">Hello</h3>
          <p class="list-description">Lorem Ipsum is simply dummy text of the printing</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
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
