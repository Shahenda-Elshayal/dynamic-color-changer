let list = document.querySelectorAll("ul li");
let test = document.querySelector(".test");

// Check if a color exists in local storage
if (window.localStorage.getItem("color")) {
    test.style.backgroundColor = window.localStorage.getItem("color");

    // Remove the active class from all elements
    list.forEach((e) => {
        e.classList.remove("active");
    })

    // Apply the active class to the element saved in local storage
    document.querySelector(`[data-color = "${window.localStorage.getItem("color")}"]`).classList.add("active");
}

// Set the color in local storage on click
list.forEach((ele) => {
    ele.addEventListener("click", function () {

        // Remove the active class from all elements
        list.forEach((e) => {
            e.classList.remove("active");
        })

        // Apply the active class to the clicked element
        this.classList.add("active");

        // Set the background color of the div based on the clicked element
        window.localStorage.setItem("color", this.getAttribute("data-color"));
        test.style.backgroundColor = window.localStorage.getItem("color");
    })
})