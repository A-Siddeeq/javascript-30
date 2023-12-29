let theJoke = document.querySelector('#joke')

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
    
  })
  .then(function(data) {
    console.log(data);

    theJoke.textContent = data[`${Math.floor(Math.random()*16)}`].text;
  });

  const genQuote = () => {window.location.reload()};