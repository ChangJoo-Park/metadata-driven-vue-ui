<template>
  <div class='home page'>
    <div id="selector">
      <label for="">UI Option</label>
      <select v-model="currentWidget">
        <option value="sample">Sample</option>
        <option value="sample2">Sample2</option>
        <option value="airbnb">Airbnb</option>
      </select>
    </div>

    <!-- <widget
      v-for="(item, index) in widgets[currentWidget]"
      :key="index"
      :type="item.type"
      :title="item.title"
      :hasHeader="item.hasHeader"
      :hasMore="item.hasMore"
      :items="item.items"
    /> -->
<pre>{{home.rows}}</pre>
  </div>
</template>

<script>
// @ is an alias to /src
import Widget from '@/components/Widget'
import Slick from 'vue-slick'

import { sample, sample2, airbnb } from '@/layouts/index.js'
import metadata from '@/metadatas'

console.log('metadata => ', metadata)

const widgets = {
  sample,
  sample2,
  airbnb
}

export default {
  name: 'home',
  components: {
    Slick,
    Widget
  },
  data () {
    return {
      currentWidget: 'airbnb',
      widgets,
      slickOptions: {
        arrows: false,
        prevArrow: ''
      },
      home: metadata.home
    }
  }
}
</script>

<style>
#selector {
  position: absolute;
  top: 0;
  right: 15px;
}
</style>
