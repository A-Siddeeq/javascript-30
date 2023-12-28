
let time = document.querySelector('#time')
let day = document.querySelector('#day')

let days = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

function showTime() {
  let dateTime = new Date()
  let theTime = dateTime.toLocaleTimeString()
  let theDay = dateTime.getDay()

  switch(theDay){
      case 0:
          day.innerHTML = days[0].toUpperCase()
          break;
      case 1:
          day.innerHTML = days[1].toUpperCase()
          break;
      case 2:
          day.innerHTML = days[2].toUpperCase()
          break;
      case 3:
          day.innerHTML = days[3].toUpperCase()
          break;
      case 4:
          day.innerHTML = days[4].toUpperCase()
          break;
      case 5:
          day.innerHTML = days[5].toUpperCase()
          break;
      case 6:
          day.innerHTML = days[6].toUpperCase()
          break;
  }

  time.innerHTML = theTime
}

let display = setInterval(showTime, 1000)
