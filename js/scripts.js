document.addEventListener('DOMContentLoaded', () => {
    const projectBoxes = document.querySelectorAll('.project-box');

    projectBoxes.forEach(box => {
        box.addEventListener('click', () => {
            box.classList.toggle('expanded');
        });
    });
});