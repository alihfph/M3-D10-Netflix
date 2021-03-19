const url = "https://striveschool-api.herokuapp.com/api/movies/";

window.onload = async () => {
  console.log("page has been rendered");
  console.log("ADDRESS BAR", window.location.search);
  let urlParams = new URLSearchParams(window.location.search);
  let id = urlParams.get("id");
  console.log(id);

  let category = urlParams.get("category")

  // document.getElementById("loadingSpinner").classList.toggle("d-none");

  try {
    let response = await fetch(url + category,{ method: "GET",
    // body: JSON.stringify(myEvent),
    headers: new Headers( {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZWJkYjg5YzI2ZjAwMTU3ZjljMjkiLCJpYXQiOjE2MTYxNjU4MjgsImV4cCI6MTYxNzM3NTQyOH0.Yt9PO5T_X6GToRS1yhZJ3obOIAgpQ7RDARmW28W1MMU"
      }),
  }); // "https://striveschool-api.herokuapp.com/api/agenda/6051e84789c26f00157f9c27"
    let categoryMovies = await response.json();
    console.log("SINGLE EVENT", categoryMovies);

    const data = categoryMovies.find( movie => movie._id === id)

    if (!data) throw new Error("ID not valid")
    // use the data for creating some <p> into the detail section of the page
    let p = document.createElement("div");
    p.innerHTML = `<div class="justify-content-center">
    <div>
    <h5 class="card-title">${data.imageUrl}</h5>
     <p class="card-text">${data.name}</p>
    <a href="#" class="mb-2">${data.description}</a>
    <a href="#" class="mb-2">${data.brand}</a>
    </div>
    </div>
    <img src="${data.imageUrl}" class="img-fluid" alt="...">
    `;

    // document.getElementById("loadingSpinner").classList.toggle("d-none");

    document.getElementById("details").appendChild(p);
  } catch (error) {
    console.log(error);
  }
};

const handleDelete = async () => {
  let urlParams = new URLSearchParams(window.location.search);
  let id = urlParams.get("id");
  try {
    let response = await fetch(url+id, { method: "DELETE",
    // body: JSON.stringify(myEvent),
    headers: new Headers( {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZWJkYjg5YzI2ZjAwMTU3ZjljMjkiLCJpYXQiOjE2MTYxNjU4MjgsImV4cCI6MTYxNzM3NTQyOH0.Yt9PO5T_X6GToRS1yhZJ3obOIAgpQ7RDARmW28W1MMU"
      }),
  });
    if (response.ok) {
      alert("event deleted successfully");
      window.location.assign("index.html");
    } else {
      alert("something went wrong with the deletion process");
    }
  } catch (error) {
    console.log(error);
  }
};

const handleEdit = () => {
  let urlParams = new URLSearchParams(window.location.search);
  let id = urlParams.get("id");
  window.location.assign("backoffice.html?id=" + id);
};