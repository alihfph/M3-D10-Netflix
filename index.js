
window.onload = async () => {
  console.log("page has been rendered");

  try {

    let response = await fetch("https://striveschool-api.herokuapp.com/api/movies/Drama", {
      headers:new Headers( {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZWJkYjg5YzI2ZjAwMTU3ZjljMjkiLCJpYXQiOjE2MTYxNjU4MjgsImV4cCI6MTYxNzM3NTQyOH0.Yt9PO5T_X6GToRS1yhZJ3obOIAgpQ7RDARmW28W1MMU",
        })
      });
    console.log(response);
    let data = await response.json();
    console.log(data);

    if (data.length > 0) {
      data.forEach((event) => {
        let currentProducts = document.getElementById("currentProducts")
        let listItem = document.createElement("div");
        listItem.classList.add(
          "col",
          "justify-content-center"
        );
        listItem.innerHTML = `<div class="card mb-4" style="width: 18rem;">
                                <img src=${event.imageUrl} class="card-img-top" alt="...">
                              <div class="card-body">
                                <h5 class="card-title">${event.name}</h5>
                                 <p class="card-text">${event.description}</p>
                                <a href="#" class="">${event.category}</a><br>
                                <span><a class="btn btn-info" href="./detail.html?id=${event._id}">Edit/Delete</a></span>
                                </div>
                                </div>
                                `
        currentProducts.appendChild(listItem)
      })
    } else {
      currentProducts.innerHTML = `<h1>Your products list is empty..!</h1>`
    }
  } 
  
  catch (err) {
    console.log(err);
  }

  try {

    let response = await fetch("https://striveschool-api.herokuapp.com/api/movies/fantasy", {
      headers:new Headers( {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZWJkYjg5YzI2ZjAwMTU3ZjljMjkiLCJpYXQiOjE2MTYxNjU4MjgsImV4cCI6MTYxNzM3NTQyOH0.Yt9PO5T_X6GToRS1yhZJ3obOIAgpQ7RDARmW28W1MMU",
        })
      });
    console.log(response);
    let data = await response.json();
    console.log(data);
    if (data.length > 0) {
      data.forEach((event) => {
        let fantasyMovies = document.getElementById("fantasyMovies")
        let listItem = document.createElement("div");
        listItem.classList.add(
          "col",
          "justify-content-center"
        );
        listItem.innerHTML = `<div class="card mb-4" style="width: 18rem;">
                                <img src=${event.imageUrl} class="card-img-top" alt="...">
                              <div class="card-body">
                                <h5 class="card-title">${event.name}</h5>
                                 <p class="card-text">${event.description}</p>
                                <a href="#" class="">${event.category}</a><br>
                                <span><a class="btn btn-info" href="./detail.html?id=${event._id}">Edit/Delete</a></span>
                                </div>
                                </div>
                                `
                                fantasyMovies.appendChild(listItem)
      })
    } else {
      fantasyMovies.innerHTML = `<h1>Your products list is empty..!</h1>`
    }
  } 
  
  catch (err) {
    console.log(err);
  }

  
  try {

    let response = await fetch("https://striveschool-api.herokuapp.com/api/movies/comedy", {
      headers:new Headers( {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZWJkYjg5YzI2ZjAwMTU3ZjljMjkiLCJpYXQiOjE2MTYxNjU4MjgsImV4cCI6MTYxNzM3NTQyOH0.Yt9PO5T_X6GToRS1yhZJ3obOIAgpQ7RDARmW28W1MMU",
        })
      });
    console.log(response);
    let data = await response.json();
    console.log(data);

    if (data.length > 0) {
      data.forEach((event) => {
        let comedyMovies = document.getElementById("comedyMovies")
        let listItem = document.createElement("div");
        listItem.classList.add(
          "col",
          "justify-content-center"
        );
        listItem.innerHTML = `<div class="card mb-4" style="width: 18rem;">
                                <img src=${event.imageUrl} class="card-img-top" alt="...">
                              <div class="card-body">
                                <h5 class="card-title">${event.name}</h5>
                                 <p class="card-text">${event.description}</p>
                                <a href="#" class="">${event.category}</a><br>
                                <span><a class="btn btn-info" href="./detail.html?id=${event._id}">Edit/Delete</a></span>
                                </div>
                                </div>
                                `
                                comedyMovies.appendChild(listItem)
      })
    } else {
      comedyMovies.innerHTML = `<h1>Your products list is empty..!</h1>`
    }
  } 
  
  catch (err) {
    console.log(err);
  }

  

}