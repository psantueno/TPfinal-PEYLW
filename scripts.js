document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.querySelector('.navbar-hamburguer-toggler');
    const navList = document.querySelector('.nav-list');
    const phraseContainer = document.getElementById('phraseContainer');

    function toggleNavbar() {

        if (navList.classList.contains('open')) {
            navList.classList.remove('open');
            setTimeout(() => {
                navList.style.display = 'none';
            }, 500);


            phraseContainer.style.opacity = 1;
            setTimeout(() => {
                phraseContainer.style.display = 'block';
            }, 500);
        } else {
            navList.style.display = 'flex';
            setTimeout(() => {
                navList.classList.add('open');
            }, 200);


            phraseContainer.style.opacity = 0;
            phraseContainer.style.display = 'none';

        }
        navbarToggle.classList.toggle('open');
    }

    navbarToggle.addEventListener('click', toggleNavbar);

    // Cerrar el menú cuando se hace clic en un enlace
    const navLinks = document.querySelectorAll('.nav-list li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navList.classList.remove('open');
            setTimeout(() => {
                navList.style.display = 'none';
            }, 500);


            phraseContainer.style.opacity = 1;
            setTimeout(() => {
                phraseContainer.style.display = 'block';
            }, 500);
            navbarToggle.classList.remove('open');
        });
    });


    document.addEventListener('click', function (event) {
        const isClickInsideNavbar = navbarToggle.contains(event.target) || navList.contains(event.target);
        if (!isClickInsideNavbar) {
            navList.classList.remove('open');
            setTimeout(() => {
                navList.style.display = 'none';
            }, 500);
            phraseContainer.style.opacity = 1;
            setTimeout(() => {
                phraseContainer.style.display = 'block';
            }, 500);
            navbarToggle.classList.remove('open');
        }
    });
});



