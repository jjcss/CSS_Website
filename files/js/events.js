// Navbar JS
const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle("active")
})
// 
// Carousel Section JS
const radios = document.querySelectorAll('input[type="radio"]');
    const carousel = document.querySelector('main#carousel');
    
    const totalItems = radios.length; // Total number of carousel items (e.g., 5)
   
    let position = 2; // Start with the middle item
    // Function to update the carousel's position and sync the radio buttons
    function updateCarouselPosition() {
        // Update the carousel's CSS variable for the current position
        carousel.style.setProperty('--position', position);

        // Sync the radio buttons with the carousel position
        radios.forEach((radio, index) => {
            radio.checked = (index + 1 === position);
        });
    }

    // Handle Left Arrow Click
    document.querySelector('.left-arrow').addEventListener('click', () => {
        if (position > 1) {
            position -= 1; // Go to the previous item
        } else {
            position = totalItems; // Wrap around to the last item if at the first
        }
        updateCarouselPosition(); // Update the carousel and radio buttons
    });

    // Handle Right Arrow Click
    document.querySelector('.right-arrow').addEventListener('click', () => {
        if (position < totalItems) {
            position += 1; // Go to the next item
        } else {
            position = 1; // Wrap around to the first item if at the last
        }
        updateCarouselPosition(); // Update the carousel and radio buttons
    });

    // Handle Radio Button Clicks
    radios.forEach((radio, index) => {
        radio.addEventListener('click', () => {
            position = index + 1; // Set position based on the clicked radio button
            updateCarouselPosition(); // Update the carousel and radio buttons
        });
    });
document.addEventListener("DOMContentLoaded", function() {
    const dropdownButton = document.querySelector(".dropdown-button");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropdownButton.addEventListener("click", function(event) {
        event.stopPropagation();
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function(event) {
        if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = "none";
        }
    });
});

    // Initial update of the carousel position
    updateCarouselPosition();
// 
