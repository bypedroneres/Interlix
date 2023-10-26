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