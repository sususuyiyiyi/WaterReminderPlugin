document.addEventListener('DOMContentLoaded', function() {
    // 加载保存的水量数据
    chrome.storage.local.get(['waterAmount'], function(result) {
        document.getElementById('waterAmount').textContent = result.waterAmount || 0;
    });

    // 添加水量按钮
    document.getElementById('addWater').addEventListener('click', function() {
        chrome.storage.local.get(['waterAmount'], function(result) {
            const currentAmount = result.waterAmount || 0;
            const newAmount = currentAmount + 200;
            chrome.storage.local.set({waterAmount: newAmount}, function() {
                document.getElementById('waterAmount').textContent = newAmount;
            });
        });
    });

    // 重置按钮
    document.getElementById('resetWater').addEventListener('click', function() {
        chrome.storage.local.set({waterAmount: 0}, function() {
            document.getElementById('waterAmount').textContent = 0;
        });
    });
});