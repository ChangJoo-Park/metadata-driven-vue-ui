<template>
  <div class='home page'>
    <widget
      v-for="(item, index) in widgets"
      :key="index"
      :type="item.type"
      :title="item.title"
      :hasHeader="item.hasHeader"
      :hasMore="item.hasMore"
      :items="item.items"
    />
    <widget type='grid' title="Today" :hasHeader="true" :hasMore="true"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Widget from '@/components/Widget'

const uiData = [
  {
    type: 'banners',
    hasHeader: false,
    hasMore: false,
    title: '',
    items: [
      {
        title: '',
        image: '//image.goodchoice.kr/resize_1000X500x0/adimg_new/6310/0/5743b189bf666.jpg'
      },
      {
        title: '',
        image: '//image.goodchoice.kr/resize_1000X500x0/adimg_new/12400/0/586dad5232446.jpg'
      },
      {
        title: '',
        image: '//image.goodchoice.kr/resize_1000X500x0/adimg_new/52083/0/5b07c3bb35e30.jpg'
      }
    ]
  },
  {
    type: 'list',
    hasHeader: true,
    hasMore: false,
    title: 'Events',
    items: [
      {
        title: 'Hello',
        description: 'Lorem Ipsum is simply dummy text of the printing',
        image: '//image.goodchoice.kr/resize_1000X500x0/adimg_new/6310/0/5743b189bf666.jpg'
      },
      {
        title: 'Hello',
        description: 'Lorem Ipsum is simply dummy text of the printing',
        image: '//image.goodchoice.kr/resize_1000X500x0/adimg_new/12400/0/586dad5232446.jpg'
      },
      {
        title: 'Hello',
        description: 'Lorem Ipsum is simply dummy text of the printing',
        image: '//image.goodchoice.kr/resize_1000X500x0/adimg_new/52083/0/5b07c3bb35e30.jpg'
      },
      {
        title: 'Hello',
        description: 'Lorem Ipsum is simply dummy text of the printing',
        image: '//image.goodchoice.kr/resize_1000X500x0/adimg_new/6337/0/578dc0855e11b.jpg'
      },
      {
        title: 'Hello',
        description: 'Lorem Ipsum is simply dummy text of the printing',
        image: '//image.goodchoice.kr/resize_1000X500x0/adimg_new/52083/0/5b07c3bb35e30.jpg'
      }
    ]
  }
]

export default {
  name: 'home',
  components: {
    Widget
  },
  data () {
    return {
      widgets: uiData
    }
  }
}
</script>
