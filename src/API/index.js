import axios from 'axios';



export async function getFilms() {
  const options = {
    method: 'GET',
    url: 'https://imdb-top-100-movies.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': 'de93a73565mshf1ebecb18d31c5ep1d7417jsneb9c030cdee9',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  };
  
  const response = await axios.request(options)
  .catch(function (error) {
    console.error(error);
  });
  return response.data
}