const submitBtn = document.registerForm
const toastContainer = document.getElementById("toastContainer")
const errorText = document.createElement("span")
toastContainer.appendChild(errorText)

const showError = (error)=>{
    errorText.innerHTML = error
        toastContainer.appendChild(errorText)
        toastContainer.removeAttribute("class")
        toastContainer.setAttribute("class", "toastContainerOpen")
        setTimeout(function(){
            toastContainer.removeAttribute("class")
            toastContainer.setAttribute("class", "toastContainer")
        }, 5000);
}

const showSuccess = (success) => {
    errorText.innerHTML= success
    toastContainer.appendChild(errorText)
    toastContainer.removeAttribute("class")
    toastContainer.setAttribute("class", "toastCotainerSuccess")
    setTimeout(function() {
        toastContainer.removeAttribute('class')
        toastContainer.setAttribute("class", "toastContainer")
    }, 5000)
}

submitBtn.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.registerForm.username.value.toLowerCase()
    const password = document.registerForm.password.value
    const confPassword = document.registerForm.confPassword.value

    if (username === "") {
        showError("Username cannot be Empty")
    }
    else if (password === "") {
        showError("Password cannot be Empty")
    }
    else if (confPassword === "") {
        showError("Password must be Confirmed")
    }
    else if (password !== confPassword) {
        showError("Password's don't match")
    }
    else {
        showSuccess("Registration Complete")
    }
})