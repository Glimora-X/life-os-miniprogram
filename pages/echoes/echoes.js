const { echoClusters, echoResurface } = require('../../utils/mock-data')
const { registerCapture, unregisterCapture } = require('../../utils/capture-bridge')

Page({
  data: {
    echoClusters,
    echoResurface,
    captureVisible: false
  },

  onShow() {
    registerCapture(this)
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 1 })
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

  saveMoment() {
    this.setData({ captureVisible: false })
    wx.showToast({ title: '已保存', icon: 'success' })
  }
})
