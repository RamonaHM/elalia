let time_text = document.getElementById("current_time");

setInterval(() => {
    let today = new Date().toLocaleTimeString();
    time_text.innerHTML = today;    
}, 100);
