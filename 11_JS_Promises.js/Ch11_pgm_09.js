const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  })
  .catch(error => console.error('Fetch error:', error)); // Handling error if something goes wrong

// Using async and await
const fetchData = async () => {
  try {
    const response = await fetch(url);
    // Checking if the response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const countries = await response.json();

    // Getting and processing the data
    console.log(countries);
  } catch (err) {
    console.error('Fetch error:', err);
  }
};

console.log('===== async and await =====');
fetchData();

// Async function to square a number
const square = async function (n) {
  return n * n;
};

// Using the async function and handling the promise
square(2)
  .then(value => console.log(`Square of 2: ${value}`))
  .catch(error => console.error('Error:', error));