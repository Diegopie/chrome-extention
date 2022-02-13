const color = '#b0105e';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default color is %magenta', `color: ${color}`);
})