// Mouse movement effect
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 40;
    const y = (e.clientY / window.innerHeight - 0.5) * 40;
    document.body.style.setProperty('--x', `${x}px`);
    document.body.style.setProperty('--y', `${y}px`);
    document.body.classList.add('mouse-active');
});

let scrollLock = true; // Initially lock the scroll
const scrollThreshold = window.innerHeight * 0.3; // 30% of the viewport height
const arrow = document.getElementById('scroll-arrow');
let scrollTimeout;

// Function to handle scroll behavior
function handleScroll(event) {
    const scrollPosition = window.scrollY;

    if (scrollLock) {
        if (scrollPosition > scrollThreshold) {
            scrollLock = false;
            arrow.classList.add('up'); // Flip the arrow
        } else {
            // Allow scrolling but prepare to reset after scrolling stops
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (scrollPosition <= scrollThreshold) {
                    window.scrollTo(0, 0); // Reset scroll position to the top of the intro section
                }
            }, 100); // Delay to ensure the user has stopped scrolling
        }
    }
}

// Unlock the scroll when the arrow is clicked
arrow.addEventListener('click', () => {
    scrollLock = false;
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

// Prevent default scrolling until the user has scrolled far enough
window.addEventListener('scroll', handleScroll);

// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to toggle visibility based on viewport presence
function toggleVisibility() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        if (isInViewport(box)) {
            box.classList.add('visible');
        } else {
            box.classList.remove('visible');
        }
    });
}

// Check visibility on scroll and on page load
window.addEventListener('scroll', toggleVisibility);
window.addEventListener('load', toggleVisibility);

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
