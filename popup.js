document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("fixBtn").addEventListener("click", handler1);
  document.getElementById("restoreBtn").addEventListener("click", handler2);
});

function handler1() {
    chrome.tabs.executeScript({
        code: 'document.body.style.fontFamily = "Comic Sans MS,Comic Sans";'
    });
}

function handler2() {
    chrome.tabs.executeScript({
        code: 'document.body.style.fontFamily = "Times New Roman";'
    });
}
