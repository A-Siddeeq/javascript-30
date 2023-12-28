
//ASSIGNING SCREEN TO VARIABLE
 let screen = document.getElementById('screen')
 //ASSIGNING NUMBERS AND OPERATORS TO VARIABLE
 let nums = document.querySelectorAll('.ints')
 //ASSIGNING CLEAR ALL TO VARIABLE
 let clrAll = document.querySelector('.clrAll')
 //ASSIGNING CLEAR ONE TO VARIABLE
 let clear = document.querySelector('.clr')
 //ASSIGNING EQUAL SIGN TO VARIABLE
 let equal = document.querySelector('.equal')

 //ACTUALISING OPERATOR AND NUMBER TO WRITE ON SCREEN
nums.forEach(function(clickedBtn){
    clickedBtn.addEventListener('click', function(e){
        value = e.target.dataset.num
        screen.value += value 
    }
)})

//MAKING AC BUTTON CLEAR ALL NUMBERS ON SCREEN
clrAll.addEventListener('click', function(e){
    screen.value = ''
})

//MAKING C BUTTON CLEAR A SINGLE NUMBER
//work in progress
// function remove(){
//     let rem = screen.value.pop();
//     rem.pop();
// }

// clear.addEventListener('click', remove)

//MAKING = BUTTON EVALUATE MATHS EXPRESSION
equal.addEventListener('click', function(e){
    screen.value = ''?
    screen.value = '' : screen.value = eval(screen.value)
})