const primaryNav = document.querySelector(".primary-nav");
const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')

    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', true);
        menu.setAttribute("aria-expanded", true)
    } else {
        primaryNav.setAttribute('data-visible', false);
        menu.setAttribute("aria-expanded", false)
    }
})