// JavaScript for menu to slide out/in on smaller screens:

// 1. target hamburger menu button 
const menuButton = document.querySelector('.toggle');
const menuList = document.getElementById('menu');
const menuUl = document.getElementById('menuUl');

// 3. add event listener to the menu button
menuButton.addEventListener('click', function () {
    // target button's child <i>; toggles class to replace hamburger with 'x' icon & vice versa
    this.children[0].classList.toggle('fa-times');

    // adds/removes class to allow ul to slide in/out
    menuList.classList.toggle('slideOut');
});

// 4. Add event listener to nav links
menuUl.addEventListener('click', function() {
    menuList.classList.toggle('slideOut');
    menuButton.children[0].classList.toggle('fa-times');
});