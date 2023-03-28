const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

const toggleClass = (e) => {
    console.log(e)
    navbarLinks.classList.toggle('active');
    // toggleButton.removeEventListener('click', toggleClass);
}

toggleButton.addEventListener('click', toggleClass);