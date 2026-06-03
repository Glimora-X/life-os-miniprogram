Component({
  data: {
    selected: 0,
    list: [
      { pagePath: '/pages/today/today', text: '今天', icon: 'today' },
      { pagePath: '/pages/echoes/echoes', text: '回声', icon: 'echoes' },
      { pagePath: '/pages/patterns/patterns', text: '模式', icon: 'patterns' },
      { pagePath: '/pages/self/self', text: '我', icon: 'self' }
    ]
  },

  methods: {
    switchTab(event) {
      const index = Number(event.currentTarget.dataset.index)
      const path = this.data.list[index].pagePath
      wx.switchTab({ url: path })
      this.setData({ selected: index })
    },

    onCapture() {
      getApp().openCapture()
    }
  }
})
