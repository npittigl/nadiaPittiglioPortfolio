// JS FOR SLIDE OUT/IN MENU ON SMALLER SCREENS:

// 1. Target menu elements:
const navMenu = document.getElementById('navMenu');
const menuButton = document.getElementById('toggle');
const menuUl = document.getElementById('menuUl');

// 2. Add event listener to nav menu:
navMenu.addEventListener('click', function (event) {
    // if the event target is an <i>, button or <a> element, then event is triggered
    if (event.target.tagName === 'I' || event.target.tagName === 'BUTTON' || event.target.tagName === 'A') {
        // toggles class to replace hamburger with 'x' icon & vice versa
        menuButton.children[0].classList.toggle('fa-times');

        // update aria-label
        if (menuButton.children[0].className === 'fa fa-bars fa-times') {
            menuButton.setAttribute('aria-label', 'hide navigation menu')
            menuButton.setAttribute('aria-expanded', true);
        } else {
            menuButton.setAttribute('aria-label', 'show navigation menu');
            menuButton.setAttribute('aria-expanded', false);
        }

        // removes/adds visibility of ul when on/off screen
        menuUl.classList.toggle('vh');
        // adds/removes class to allow menu to slide in/out
        navMenu.classList.toggle('slideOut');
    }
})

// JS TO CLEAR FORM AFTER SUBMISSION:
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}

// form doesn't clear in safari