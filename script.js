// Menu icon toggle functionality
document.getElementById("menu-icon").addEventListener("click", function() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
});

// Fade-in effect for hero image on page load
window.addEventListener("load", function() {
    const heroImage = document.querySelector(".hero-image");
    heroImage.classList.add("fade-in"); // Add the class that triggers the fade-in animation

    // Apply fade-in effect for the card images
    const cardImages = document.querySelectorAll(".card-image");
    cardImages.forEach(function(image) {
        image.classList.add("fade-in");
    });
});
// Get modal element
var modal = document.getElementById("book-clean-modal");

// Get the button and navbar link that opens the modal
var heroButton = document.querySelector(".hero-button");
var navbarLink = document.querySelector(".nav-links li a[href='#']");

// Get the <span> element that closes the modal
var closeBtn = document.querySelector(".close");

// When the user clicks on the button or link, open the modal
heroButton.addEventListener("click", function() {
    modal.style.display = "flex"; // Open the modal and make it visible
});

navbarLink.addEventListener("click", function(e) {
    e.preventDefault(); // Prevent default behavior of the link
    modal.style.display = "flex"; // Open the modal
});

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener("click", function() {
    modal.style.display = "none"; // Hide the modal
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Hide the modal
    }
});
