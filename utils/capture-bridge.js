function registerCapture(page) {
  const app = getApp()
  app._capturePage = page
}

function openCapture() {
  const app = getApp()
  if (app._capturePage && typeof app._capturePage.openCapture === 'function') {
    app._capturePage.openCapture()
  }
}

function unregisterCapture(page) {
  const app = getApp()
  if (app._capturePage === page) {
    app._capturePage = null
  }
}

module.exports = {
  registerCapture,
  openCapture,
  unregisterCapture
}
