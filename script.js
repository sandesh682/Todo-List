let form = document.querySelector('body > header > div > div > div > div > form');
let ul = document.querySelector('body > header > div > div > div > div > ul');


let generateTemplate = (val) => {

    ul.innerHTML += `<li class="list-group-item bg-dark">${val} <i class="fas fa-trash pointer"></i></li>`;
   
}

form.addEventListener('submit', e => {

    e.preventDefault();
    if (e.target.addtodo.value == ''){
        alert('The value cannot be empty');
    }
    else{
        generateTemplate(e.target.addtodo.value);
    }
});

ul.addEventListener('click', e => {
    if(e.target.classList.contains('fa-trash')){
        e.target.parentElement.remove();
    }
});