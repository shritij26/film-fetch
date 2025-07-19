const apiKey = "d2709a2e"; 
function searchMovie() {
  const movieName = document.getElementById("searchInput").value.trim();
  const resultDiv = document.getElementById("movieResult");

  if (!movieName) {
    resultDiv.innerHTML = "<p>Please enter a movie name.</p>";
    return;
  }

  fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      if (data.Response === "True") {
        resultDiv.innerHTML = `
          <img src="${data.Poster}" alt="${data.Title} Poster">
          <h2>${data.Title}</h2>
          <p><strong>Year:</strong> ${data.Year}</p>
          <p><strong>Genre:</strong> ${data.Genre}</p>
          <p><strong>IMDB:</strong> ${data.imdbRating}</p>
          <p><strong>Plot:</strong> ${data.Plot}</p>
        `;
      } else {
        resultDiv.innerHTML = "<p>Movie not found!</p>";
      }
    })
    .catch(err => {
      resultDiv.innerHTML = "<p>Error fetching data!</p>";
    });
}
