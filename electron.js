// GUIDE:
// https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-p
// r oduction-a0468ecb1da3 PACKAGING: electron-builder:
// https://github.com/electron-userland/electron-builder#quick-setup-guide
// RESOURCES (TIPS & TRICKS)
// 1. https://www.infoq.com/presentations/electron-pitfalls
// 2.
// https://blog.avocode.com/4-must-know-tips-for-building-cross-platform-electron
// -apps-f3ae9c2bffff
// 3. [npm] https://www.npmjs.com/package/electron-app-settings
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const isDev = require('electron-is-dev')

let mainWindow

function createWindow () {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 768,
        webPreferences: {
            devTools: true
        },
        icon: path.join(__dirname, 'assets/vis-ion-logo.png')
    })
    mainWindow.loadURL(isDev
        ? 'http://localhost:8080'
        : `file://${path.join(__dirname, './dist/index.html')}`)
    mainWindow.on('closed', () => { mainWindow = null })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})
