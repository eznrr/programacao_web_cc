let btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", submit);

function submit() {
    let nameElement = document.getElementById("nome").value;
    let idadeElement = document.getElementById("idade").value;
    let emailElement = document.getElementById("email").value;

    console.log(nameElement);
    console.log(idadeElement);
    console.log(emailElement);

    alert("funcao submit");
}

function isEmailValid (emailElement) {
    return /[\w.-]+@[\w-]+.[a-zA-Z]+$/.test(emailElement)
}

function isIdadeValid (idade) {
    return true;
   
}