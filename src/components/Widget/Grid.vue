<template>
  <div class="wrapper">
    <div class="box box1">
      <v-icon name="navigation"></v-icon>
      Navigation
    </div>
    <div class="box box2">
      <v-icon name="music"></v-icon>
      Music
    </div>
    <div class="box box3">
      <v-icon name="map-pin"></v-icon>
      Map
    </div>
    <div class="box box4">
      <v-icon name="package"></v-icon>
      Pacakge
    </div>
    <div class="box box1">
      <v-icon name="pie-chart"></v-icon>
      Chart
    </div>
    <div class="box box2">
      <v-icon name="star"></v-icon>
      Favorite
    </div>
    <div class="box box3">
      <v-icon name="tv"></v-icon>
      TV
    </div>
    <div class="box box4">
      <v-icon name="watch"></v-icon>
      Watch
    </div>
    <div class="box box1">
      <v-icon name="wind"></v-icon>
      Wind
    </div>
  </div>
</template>

<script>
export default {}
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
