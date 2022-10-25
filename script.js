const menuEl = document.querySelector('.manu');
const socialEl = document.querySelector(".social-list");
const menuAngle = document.querySelector('.fas');
const liEls = document.querySelectorAll('.social-list li')

menuEl.addEventListener('click', () => {
    socialEl.classList.toggle('hide');
    menuAngle.classList.toggle('rotate')
});

liEls.forEach((liEl) => {
    liEl.addEventListener('click', () => {
        menuEl.innerHTML = liEl;
    })
})