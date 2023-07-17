let passwordinput = document.getElementById('password');
let confirminput = document.getElementById('confirm');
let passError = document.getElementById('passworderror');
let confirmerror = document.getElementById('confirmerror');

function validate(){
    let password = passwordinput.value;
    let confirm = confirminput.value;
    if(password.length < 8){
        passError.textContent = "Password must be at least 8 characters.";
        return false;
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
        passError.textContent = "Password must include at least one uppercase letter, one lowercase letter, and one digit.";
        return false;
    }
    passError.style.display='none';
    if(password !== confirm){
        confirmerror.textContent = "Passwords do not match.";
        return false;
    }

    passError.textContent = '';
    confirmerror.textContent = '';

    return true;
}

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  if (!validate()) {
    event.preventDefault();
  }
});
