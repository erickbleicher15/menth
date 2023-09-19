function onChangeEmail(){
    toggleDisabledButtons()
    toggleEmailErrors()
}

function onChangePassword(){
    toggleDisabledButtons()
    togglePasswordErrors()

}

function isPasswordValid(){
    const password = form.password().value
    if (!password){
        return false
    }
    return true
}

function isEmailValid(){
    const email = form.email().value
    if (!email){
        return false
    }
    return validateEmail(email)
}

function validateEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}

function toggleEmailErrors(){
    const email = form.email().value

    if(!email){
        form.emailRequiredError().style.display = 'block'
    }else{
        form.emailRequiredError().style.display = 'none'
    }

    if(validateEmail(email)){
        form.emailInvalidError().style.display = 'none'
    }else{
        form.emailInvalidError().style.display = 'block'
    }
}

function togglePasswordErrors(){
    const password = form.password().value

    if(!password){
        form.passwordRequiredError().style.display = 'block'
    }else{
        form.passwordRequiredError().style.display = 'none'
    }
}

function toggleDisabledButtons(){
    const emailValid = isEmailValid()
    form.recoverPassword().disabled = !emailValid 
    const passwordValid = isPasswordValid()
    form.loginButton().disabled =!emailValid ||!passwordValid

}


const form = {
    email: () => document.getElementById('logemail'),
    emailInvalidError: () => document.getElementById('error-email-invalid'),
    emailRequiredError: () => document.getElementById('error-email-required'),
    passwordRequiredError: () => document.getElementById('error-password-required'),
    failedLoginAttempt: () => document.getElementById('error-login'),
    password: () => document.getElementById('logpass'),
    recoverPassword: () => document.getElementById('recover-button'),
    loginButton: () => document.getElementById('login-button')
    
}

function login() {
    window.location.href = "login.html"
}

function index(){

    console.log("antes")
    firebase.initializeApp(firebaseConfig);
    firebase.auth().signInWithEmailAndPassword(form.email().value,form.password().value).then(response =>{
        window.location.href = "index.html";
    }).catch(error=>{
       form.failedLoginAttempt().style.display="block";
    });
    console.log("depois")
}

function getErrorMessage(){
    if(error.code == "auth/user-not-found"){
        form.failedLoginAttempt().style.display="block";
    }else{
        window.alert(error.code)
    }
}

function register(){
    window.location.href = "register.html"
}
