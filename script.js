
// change the text to say "Logout" once clicking the "Login" botton

function changeText(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout";
    }
    else {
        element.innerText = "Login";
    }

}

// hidden the Add Definition button when it is clicked

function hideButton(element) {
    element.remove();
}


// Alert "Ninja was liked" any like button is clicked

function message() {
    alert("Ninja was liked")
}