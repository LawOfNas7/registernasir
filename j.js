
const formBtn = document.loginForm
const toastContainer = document.getElementById("toastContainer")
const spanError = document.createElement('span')
toastContainer.appendChild(spanError)
const database = {
    username: "boss",
    password: "1234"
}

const showError = (error)=>{
    spanError.innerText = error
        toastContainer.appendChild(spanError)
        toastContainer.removeAttribute("class")
        toastContainer.setAttribute("class" , "toastContainerOpen")
        setTimeout(function(){
            toastContainer.removeAttribute("class")
            toastContainer.setAttribute("class" , "toastContainer")
        },2000)
}

const successMessage = (success)=>{
    spanError.innerText = success
        toastContainer.appendChild(spanError)
        toastContainer.removeAttribute("class")
        toastContainer.setAttribute("class" , "toastContainersuc")
        setTimeout(function(){
            toastContainer.removeAttribute("class")
            toastContainer.setAttribute("class" , "toastContainer")
        },2000)
}

formBtn.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.loginForm.username.value.toLowerCase()
    const password = document.loginForm.password.value
    console.log(`Your username is ${username} and your password is ${password}`)

    if(username === ''){   
        showError("This Field cannot be empty")
    }else if(password === ''){
        showError("Password Cannot Be Empty")
    } else if(username === database.username){
        console.log('Username already Exists!')
    }else{
        successMessage("Successful")
    }

} )