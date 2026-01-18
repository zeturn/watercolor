const { runInstaller } = require('./installer')

runInstaller({ interactive: true }).catch(error => {
  console.warn('[watercolor-ui] Installer error:', error.message)
})
