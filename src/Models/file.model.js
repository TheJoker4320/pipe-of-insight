const {remote} = window.require('electron');
var basepath = remote.app.getAppPath();

export default {
    step: 0,
    defaultSettings: [],
    fileName: '',
    filePath: `${basepath}\\`,
}