
const Phone_Nav = document.querySelector(".Phone_Navigation");
const Phone_Toggle = document.querySelector(".Hamburger_Toggle i");

Phone_Toggle.addEventListener('click', () => {
    const visibility = Phone_Nav.getAttribute('data-visible');

    if (visibility == "false") {
        Phone_Nav.setAttribute('data-visible', "true");
        Phone_Toggle.setAttribute('aria-expanded', "true");
        // Change the icon to 'X'
        Phone_Toggle.classList.replace('bx-menu', 'bx-x');
    } else if (visibility == "true") {
        Phone_Nav.setAttribute('data-visible', "false");
        Phone_Toggle.setAttribute('aria-expanded', "false");
        // Change the icon back to the hamburger
        Phone_Toggle.classList.replace('bx-x', 'bx-menu');
    }
});