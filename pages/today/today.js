const { dayThread, closingOptions } = require('../../utils/mock-data')
const { registerCapture, unregisterCapture } = require('../../utils/capture-bridge')

Page({
  data: {
    dayThread,
    closingOptions,
    captureVisible: false
  },

  onShow() {
    registerCapture(this)
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 0 })
    }
  },

  onHide() {
    unregisterCapture(this)
  },

  openCapture() {
    this.setData({ captureVisible: true })
  },

  closeCapture() {
    this.setData({ captureVisible: false })
  },

  saveMoment(event) {
    const content = event.detail.content || '这一刻被留下了'
    const nextMoment = {
      id: `local-${Date.now()}`,
      period: '现在',
      title: content,
      body: `意图：${event.detail.intent}`,
      note: '先记住，之后再整理。',
      noteTone: 'green',
      icon: 'ring'
    }

    this.setData({
      dayThread: [nextMoment].concat(this.data.dayThread),
      captureVisible: false
    })
  }
})
