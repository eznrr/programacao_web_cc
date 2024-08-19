let btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", submit);

function submit() {
    let nameElement = document.getElementById("nome").value;
    let idadeElement = document.getElementById("idade").value;
    let emailElement = document.getElementById("email").value;
    let cpfElement = document.getElementById("cpf").value;

    console.log(nameElement);
    console.log(idadeElement);
    console.log(cpfElement);
    //console.log(emailElement);

    console.log(isEmailValid(emailElement))

    alert("funcao submit");
}

function isIdadeValid (idade) {
    return true;
   
}

function isCpfValid (cpf) {
    return true;
   
}

function isEmailValid (email) {
    const emailValidation = /^\w+(\.\w+)*@\w+(\.\w+)+$/;
    return emailValidation.test(email)
}

