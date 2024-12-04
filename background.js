// 设置定时提醒
chrome.runtime.onInstalled.addListener(() => {
    // 创建每1分钟提醒一次的闹钟
    chrome.alarms.create('waterReminder', {
        periodInMinutes: 1 // 每1分钟提醒一次
    });
});

// 处理闹钟事件
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'waterReminder') {
        chrome.notifications.create('', {
            type: 'basic',
            iconUrl: 'icons/icon48.png',
            title: '喝水提醒',
            message: '该喝水了！保持水分很重要哦！'
        });
    }
});

// 监听消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getWaterAmount") {
        chrome.storage.local.get(['waterAmount'], function(result) {
            sendResponse({amount: result.waterAmount || 0});
        });
        return true;
    }
});