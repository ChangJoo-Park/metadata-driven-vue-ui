const WIDGET_TYPE = {
  banners: require('./Banners.vue').default,
  grid: require('./Grid.vue').default,
  list: require('./List.vue').default
}

export default {
  name: 'Widget',
  render: function (createElement) {
    const header = this.hasHeader ? createElement('div', {
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
    ]) : ''

    return createElement(
      'div', {
        class: 'widget'
      }, [
        header,
        createElement(WIDGET_TYPE[this.type], {
          class: 'widget-inner',
          props: {
            items: this.items
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
    'has-header': {
      type: [Boolean],
      default: () => true
    },
    'has-more': {
      type: [Boolean],
      default: () => false
    },
    items: {
      type: Array,
      default: () => []
    }
  }
}
