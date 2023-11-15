function toggleAnswer(id) {
    var answer = document.getElementById(id);
    if (answer.style.maxHeight === "0px" || answer.style.maxHeight === "") {
        answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
        answer.style.maxHeight = "0px";
    }
}


function showDescription(card) {
    const description = card.querySelector(".description");
    card.querySelector("h3").style.display = "none";
    description.style.display = "block";
}

function hideDescription(card) {
    const description = card.querySelector(".description");
    card.querySelector("h3").style.display = "block";
    description.style.display = "none";
}

// Add this JavaScript code to toggle the mega menu and apply the body class

const menuButton = document.getElementById("menuButton");
const megaMenu = document.getElementById("megaMenu");
const body = document.body;

menuButton.addEventListener("click", () => {
    megaMenu.classList.toggle("active");
    body.classList.toggle("mega-menu-active");
    if (megaMenu.classList.contains("active")) {
        menuButton.innerHTML = '<span class="menu-icon">&#10006;</span>';
    } else {
        menuButton.innerHTML = '<span class="menu-icon">&#9776;</span>';
    }
});


const rectangles = document.querySelectorAll('.rectangle');
const dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    rectangles.forEach((rectangle, rectangleIndex) => {
      if (index === rectangleIndex) {
        rectangle.classList.add('active');
      } else {
        rectangle.classList.remove('active');
      }
    });

    dots.forEach((dot) => {
      dot.classList.remove('active-dot');
    });

    dot.classList.add('active-dot');
  });
});