<template>
  <div class='home page'>
    <widget type='banners' title="" :hasMore="false" />
    <widget type='grid' title="Today" :hasMore="true"/>
    <widget type='list' title="Events" :hasMore="true"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Widget from '@/components/Widget'

export default {
  name: 'home',
  components: {
    Widget
  }
}
</script>
