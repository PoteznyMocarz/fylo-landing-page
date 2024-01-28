let errorLabel = document.getElementById("errorLabel");
let eMailInput = document.getElementById("eMailInput");
let correct = /^([0-9a-zA-Z]([-\.\+\_\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function() {
    if(eMailInput.value.match(correct)) {
        errorLabel.classList.remove("hidden");
        errorLabel.innerText = "We've wend you verification e-mail"
        errorLabel.classList.add("text-green-700");
        errorLabel.classList.remove("text-red-800");
    }

    else {
        errorLabel.classList.remove("hidden");
        errorLabel.innerText = "Please enter a valid email address";
        errorLabel.classList.remove("text-green-700");
        errorLabel.classList.add("text-red-800");
    }
})