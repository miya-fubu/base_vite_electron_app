const { app, BrowserWindow } = require("electron");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: false,
      preload: __dirname + "/preload.js",
    },
  });
  mainWindow.loadURL("file://" + __dirname + "/dist_vite/index.html");
}

app.on("ready", function () {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    mainWindow = null;
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
