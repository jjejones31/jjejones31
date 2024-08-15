// Mouse movement effect
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 40;
    const y = (e.clientY / window.innerHeight - 0.5) * 40;
    document.body.style.setProperty('--x', `${x}px`);
    document.body.style.setProperty('--y', `${y}px`);
    document.body.classList.add('mouse-active');
});

// Mouse movement ripple effect

let lastMove = 0;
const throttleTime = 50;
const introSection = document.getElementById('intro');

introSection.addEventListener('mousemove', function(e) {
    const now = Date.now()
    if (now - lastMove < throttleTime){
        return;
    }
    lastMove = now;

    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    document.body.appendChild(ripple);

    const size = Math.max(window.innerWidth, window.innerHeight);
    ripple.style.width = ripple.style.height = `${size}px`;

    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;    

    ripple.style.left = `${e.clientX +scrollX - size / 2}px`;
    ripple.style.top = `${e.clientY + scrollY - size / 2}px`;

    // Remove the ripple after animation ends
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
});

// Changing text effect
const textArray = [
    "Software Developer", 
    "Problem Solver", 
    "Basketball Enthusiast",
    "Language Learner",
];
let textIndex = 0;
const changingText = document.getElementById('changing-text');

function changeText() {
    changingText.textContent = textArray[textIndex];
    textIndex = (textIndex + 1) % textArray.length;
}

setInterval(changeText, 3000);
changeText();
