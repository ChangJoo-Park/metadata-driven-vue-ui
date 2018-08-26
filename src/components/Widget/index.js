const WIDGET_TYPE = {
  banners: require('./Banners.vue').default,
  grid: require('./Grid.vue').default,
  gridfour: require('./GridFour.vue').default,
  list: require('./List.vue').default,
  title: require('./Title.vue').default,
  carousel: require('./Carousel.vue').default,
  map: require('./Map.vue').default
}

export default {
  name: 'Widget',
  render: function (createElement) {
    return createElement(WIDGET_TYPE[this.type], {
      class: 'widget-inner',
      props: {
        items: this.items
      }
    })
  }
}
