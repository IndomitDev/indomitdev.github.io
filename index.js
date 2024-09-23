var dropbtn = document.querySelector(".dropbtn"); // Store in a variable the dropdown menu button
var dropdownContent = document.querySelector(".dropdownContent"); // Store in a variable the dropdown menu content
const dropdownContentStyles = window.getComputedStyle(dropdownContent); // Store in a variable the dropdown menu content styles

dropbtn.addEventListener("click", function handleButton () {
    // Open dropdown menu
    showDisplay = dropdownContentStyles.getPropertyValue("display"); // Store in a variable display style
    
    if (showDisplay == "none") {
        dropdownContent.style.display = "flex" 
    } else if (showDisplay == "flex") {
        dropdownContent.style.display = "none";
    }

})

// Close dropdown menu when clicked a item
var dropdownItems = document.querySelectorAll(".dropdownItem").length;
for (var i = 0; i < dropdownItems; i++) {
    document.querySelectorAll(".dropdownItem")[i].addEventListener("click", function handleButton() {
        dropdownContent.style.display = "none";
    });
};

// To top button
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", ()=> {
    if(window.scrollY > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})