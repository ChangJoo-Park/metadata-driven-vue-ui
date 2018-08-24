const WIDGET_TYPE = {
  banners: require('./Banners.vue').default,
  grid: require('./Grid.vue').default,
  list: require('./List.vue').default
}

export default {
  name: 'Widget',
  render: function (createElement) {
    return createElement(
      'div', {
        class: 'widget'
      }, [
        createElement('div', {
          class: 'widget-header'
        }, [
          createElement('h2', {
            class: 'widget-label'
          }, 'Today'),
          createElement('a', {
            class: 'widget-more',
            attrs: {
              href: '#'
            }
          }, 'More')
        ]),
        createElement(WIDGET_TYPE[this.type], {
          class: 'widget-inner',
          props: {
            items: []
          }
        })
      ]
    )
  },
  props: {
    type: String
  }
}
