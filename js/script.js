const texts = [
    "hai ka Rana dan ka Iraa.",
    "aku mau ngucapin sesuatu ni :)",
    "terima kasih untuk kaka-kaka yang udah nemenin kita selama 4 harii inii.",
    "seruuu banget pengalamannyaa!!.",
    "maaf yaa kak kalau ada kata-kata atau perilaku kita yang kurang berkenan.",
    "sehat-sehat ya kakk."
];

let currentIndex = 0;
let isAnimating = false; 

function typeText(text, element) {
    let index = 0;
    element.textContent = "";
    isAnimating = true;

    const typingInterval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
        } else {
            clearInterval(typingInterval);
            isAnimating = false; 
        }
    }, 50); 
}

function showNextText() {
    if (isAnimating) return; 

    currentIndex = (currentIndex + 1) % texts.length;
    const typingElement = document.getElementById("typing-text");
    typeText(texts[currentIndex], typingElement);
}

window.onload = function() {
    const typingElement = document.getElementById("typing-text");
    typeText(texts[currentIndex], typingElement);
};
