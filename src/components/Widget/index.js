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
          }, this.title),
          this.hasMore ? createElement('a', {
            class: 'widget-more',
            attrs: {
              href: '#'
            }
          }, 'More') : ''
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
    type: {
      type: String,
      default: () => ''
    },
    title: {
      type: String,
      default: () => ''
    },
    'has-more': {
      type: [Boolean],
      default: () => false
    }
  }
}
