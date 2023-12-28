
let countVal = document.querySelector('.value')
let buttons = document.querySelectorAll('.btn')

let count = 0
countVal.textContent = count

buttons.forEach(function(button){
    button.addEventListener('click', () => {
        if (button.classList.contains('minus')) {
            countVal.textContent = --count
        }  else if (button.classList.contains('plus')) {
            countVal.innerText = ++count
           
        }  else {
            count = 0
            countVal.textContent = count
        }
        
          if (count >= 1) {
            countVal.classList.remove('text-danger')
            countVal.classList.add('text-success')
          }
          if (count < 0) {
            countVal.classList.add('text-danger')
          } 
          if (count == 0) {
            countVal.classList.remove('text-danger', 'text-success')
            countVal.classList.add('text-primary')
          }
          console.log(count)
    })
}
)

