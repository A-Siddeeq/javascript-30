'use strict';

const input = document.querySelector('#writeUp');
const addNewBtn = document.querySelector('#addNew');
const taskList = document.querySelector('ul');
let x = document.querySelector('li');
const delOne = document.querySelector('.delOne');
const delAll = document.querySelector('.delAll');

addNewBtn.addEventListener('click', () => {
    delAll.style.visibility = 'visible';
    const theTask = `<li id="newAdd">${input.value} <button class="del delOne">delete</button></li>`
    if(input.value != ''){
    taskList.insertAdjacentHTML('beforeend', theTask);
    input.value = '';
    }else{alert('Please type a task to complete');}
})

//DELETE ONE NOT READY
// delOne.addEventListener('click', () => {
//    x.parentElement.remove();  
//    console.log('clicked')
//  })
 

delAll.addEventListener('click', () => {
   let deleteEl = confirm('Are you sure you want to delete all tasks?')
   if(deleteEl){ taskList.innerHTML= ''
   delAll.style.visibility = 'hidden';}else{ none}
})
