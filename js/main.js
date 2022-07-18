/*Texto subir no painel de login*/

const inputs = document.querySelectorAll(".input-field");

inputs.forEach((inp) => {
    inp.addEventListener("focus", () => {
        inp.classList.add("active");
    });
    inp.addEventListener("blur", () => {
        if (inp.value != "") return;
        inp.classList.remove("active");
    });
});

/* Hide and Show eye*/

const password = document.getElementById('password');
const icon = document.getElementById('icon-eye');

function showHide(){
    if(password.type === 'password'){
        password.setAttribute('type','text');
        icon.classList.add('hide')
    }
    else{
        password.setAttribute('type', 'password');
        icon.classList.remove('hide')
    }
}