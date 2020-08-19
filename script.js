let form = document.querySelector('body > header > div > div > div > div > form.my-4.form-group');
let ul = document.querySelector('body > header > div > div > div > div > ul');
let search = document.querySelector('body > header > div > div > div > div > form.form-group.mx-auto.my-3 > input');


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
        form.reset();
    }
});

ul.addEventListener('click', e => {
    if(e.target.classList.contains('fa-trash')){
        e.target.parentElement.remove();
    }
});

search.addEventListener('keyup', e =>{
    
    val = e.target.value;
    let li = document.querySelectorAll('li');
    li = Array.from(li);

    let new_li = li.filter(tag => {
        if(tag.innerText.includes(val))
          {
            return true;   
          }
          else{
              return false;
          }
    });
    new_li = Array.from(new_li);
   
    li.forEach( event => {

        new_li.forEach(event1 => {
            if(event != event1){
                console.log(event);
                console.log(event1);
                event.classList.add('d-none');
            }
        });
    });
} );