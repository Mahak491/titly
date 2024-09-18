document.querySelectorAll('.slide-btn').forEach(button => {
    button.addEventListener('click', function() {
        const section1 = document.querySelector('.section-1');
        const section2 = document.querySelector('.section-2');
        if (section1.classList.contains('active')) {
            section1.classList.remove('active');
            section2.classList.add('active');
        } else {
            section2.classList.remove('active');
            section1.classList.add('active');
        }
    });
});

function toggleSearch() {
    const searchBar = document.querySelector('.search-bar');
    if (searchBar.style.display === 'none' || searchBar.style.display === '') {
        searchBar.style.display = 'inline';
        searchBar.focus(); 
    } else {
        searchBar.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

