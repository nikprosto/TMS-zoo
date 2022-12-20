const iconMenu = document.querySelector ('.header-menu-icon');
const nav = document.querySelector ('.header-nav');
const navLink = document.querySelectorAll ('.header-nav-list-item-link');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        nav.classList.toggle('active');
        navLink.forEach(x => x.classList.toggle('active'));
    }
    )
}

const navLinks = document.querySelectorAll ('.header-nav-list-item-link');
if (navLinks.length > 0) {
    navLinks.forEach (navLink => {
        navLink.addEventListener ("click", navLinkClick);
    })

    function navLinkClick(e) {
        const navLink = e.target;
        if (iconMenu.classList.contains('active')) {
            document.body.classList.remove('lock');
            iconMenu.classList.remove('active');
            nav.classList.remove('active');
        }
    }
}

if (navLink) {
    navLink.forEach (x => x.addEventListener('click', function(q) {
        navLink.forEach(x => x.classList.remove('active'));
    }))
}