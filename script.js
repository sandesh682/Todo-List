let form = document.querySelector('body > header > div > div > div > div > form');
let ul = document.querySelector('body > header > div > div > div > div > ul');
let alli = document.querySelectorAll('i');

alli.forEach(curr => {
    
    curr.addEventListener('click', e => {
        curr.parentElement.remove();
    });
});

let generateTemplate = (val) => {
    let li = document.createElement('li');
    li.innerText = val;
    li.classList.add('list-group-item');
    li.classList.add('bg-dark');
    let i = document.createElement('i');
    i.classList.add('fas');
    i.classList.add('fa-trash');
    i.classList.add('pointer');
    li.innerText += " ";
    li.append(i);
    i.addEventListener('click', e=> {
        i.parentElement.remove();
    });
    ul.append(li);
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