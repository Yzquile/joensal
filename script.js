const menuIcon = document.getElementById('menu-item');
const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');
const links = document.querySelector('.links');

menuIcon.addEventListener('click', function() {
    // Toggle the menu-open class on the header element
    header.classList.toggle('menu-open');

    // If the menu-open class is present, display the navbar and links in a column
    if (header.classList.contains('menu-open')) {
        navbar.style.display = 'block';
        links.style.display = 'block';
    } else {
        // If the menu-open class is not present, hide the navbar and links
        navbar.style.display = 'none';
        links.style.display = 'none';
    }
});
