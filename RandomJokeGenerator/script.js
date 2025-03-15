const jokeSetUp = document.querySelector('.jokeSetUp')
const jokePunchLine = document.querySelector('.jokePunchLine')
const jokeGenerator = document.querySelector('#jokeGenerator')
const jokeContainer = document.querySelector('.jokeContainer')


//fetching data
const url = 'https://official-joke-api.appspot.com/jokes/random';
async function getJoke() {
  const promise = () => new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Cannot fetch data, TResponse Status ' + response.status)
        }
        return response.json()
      }).then(data => resolve(data))
      .catch(error => reject(error))
  })


  const response = await promise();
  const data = await response


  const jokeData = Object.values(data);
  console.log(jokeData)

  jokePunchLine.textContent = jokeData[2];
  jokeSetUp.textContent = jokeData[1];


}

jokeGenerator.addEventListener('click', getJoke)