const timestamp = Date.now();
const now = new Date(timestamp);
const hour = now.getHours();
let greeting = "";

switch (true) {
    case (hour >= 5 && hour <12):
        greeting = "おはよう"
        break;
    case (hour >= 12 && hour <18):
        greeting = "こんにちは"
        break;
    case (hour >= 18 && hour <22):
        greeting = "こんばんは"
        break;
    default:
        greeting = "おやすみ"
}



const greetingEl = document.getElementById("greeting");

greetingEl.textContent = `${greeting}、ヘンドリック`;