// Navbar JS
const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle("active")
})
// 

// blog category section
const items = document.querySelectorAll("ul li");
items.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector("li.active").classList.remove("active");
    item.classList.add("active");
  });
  item.addEventListener('click', function (e) {
    // e.preventDefault();
    var target = this.dataset.target;
    var items_nav = document.querySelectorAll('.item');

    //remove the class of 'selected' from the previously selected
    items.forEach(function(navOption){
        navOption.classList.remove('selected');
    });
    //add the class of 'selected' to the clicked option
    this.classList.add('selected');
    
    items_nav.forEach(function (item) {
      if (target === 'all' || item.classList.contains(target)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
// 