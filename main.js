const { app, BrowserWindow } = require("electron");
console.log("main process");
const createWindow = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 600,
    darkTheme: true,
    backgroundColor: "rgba(255, 255, 255, 0.)",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  //   let child = new BrowserWindow({ parent: win });
  //   child.loadFile("index.html");
  //   child.show();
  win.loadFile("index.html");
  win.webContents.openDevTools();
};
// app.whenReady().then(createWindow);
app.on("ready", () => {
  createWindow();
});
