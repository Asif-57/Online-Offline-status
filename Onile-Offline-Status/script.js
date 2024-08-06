function updateStatus() {
    const statusElement = document.getElementById("status");
    if (navigator.onLine) {
        statusElement.textContent = "Status: Online";
        statusElement.className = "online";
    } else {
        statusElement.textContent = "Status: Offline";
        statusElement.className = "offline";
    }
}

window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);
updateStatus();
