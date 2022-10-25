const menuEl = document.querySelector('.manu');
const menuElp = document.querySelector('.manu p');
const socialEl = document.querySelector(".social-list");
const menuAngle = document.querySelector('.fas');
const liEls = document.querySelectorAll('.social-list li')

menuEl.addEventListener('click', () => {
    socialEl.classList.toggle('hide');
    menuAngle.classList.toggle('rotate')
});

liEls.forEach((liEl) => {
    liEl.addEventListener('click', () => {
        menuElp.innerHTML = liEl.innerHTML;
        socialEl.classList.toggle('hide');
        menuAngle.classList.add('rotate')
    })
})