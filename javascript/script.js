function toggleAnswer(id) {
    var answer = document.getElementById(id);
    if (answer.style.maxHeight === "0px" || answer.style.maxHeight === "") {
        answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
        answer.style.maxHeight = "0px";
    }
}
