document.addEventListener('DOMContentLoaded', function() {
    const addWaterButton = document.getElementById('addWater');
    const resetWaterButton = document.getElementById('resetWater');
    const waterAmountDisplay = document.getElementById('waterAmount');

    // 更新显示的水量
    function updateWaterAmountDisplay(amount) {
        waterAmountDisplay.textContent = `今日喝水量: ${amount}ml`;
    }

    // 获取当前的喝水量
    function getWaterAmount() {
        chrome.storage.local.get(['waterAmount'], function(result) {
            const amount = result.waterAmount || 0;
            updateWaterAmountDisplay(amount);
        });
    }

    // 增加喝水量
    addWaterButton.addEventListener('click', function() {
        chrome.storage.local.get(['waterAmount'], function(result) {
            const currentAmount = result.waterAmount || 0;
            const newAmount = currentAmount + 200; // 每次增加200ml
            chrome.storage.local.set({waterAmount: newAmount}, function() {
                updateWaterAmountDisplay(newAmount);
            });
        });
    });

    // 重置喝水量
    resetWaterButton.addEventListener('click', function() {
        chrome.storage.local.set({waterAmount: 0}, function() {
            updateWaterAmountDisplay(0);
        });
    });

    // 初始化时获取当前喝水量
    getWaterAmount();
}); 