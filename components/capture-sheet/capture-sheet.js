const { captureIntents } = require('../../utils/mock-data')

Component({
  properties: {
    visible: {
      type: Boolean,
      value: false
    }
  },

  data: {
    intents: captureIntents,
    activeIntent: 'keep',
    content: ''
  },

  methods: {
    close() {
      this.triggerEvent('close')
    },

    chooseIntent(event) {
      this.setData({
        activeIntent: event.currentTarget.dataset.intent
      })
    },

    onInput(event) {
      this.setData({
        content: event.detail.value
      })
    },

    save() {
      const intent = this.data.intents.find((item) => item.id === this.data.activeIntent)
      this.triggerEvent('save', {
        content: this.data.content,
        intent: intent ? intent.label : '留住'
      })
      this.setData({ content: '', activeIntent: 'keep' })
    }
  }
})
