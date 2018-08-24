<template>
  <div class="home page">
    <widget type="banners"/>
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
