let id 
const url = "https://striveschool-api.herokuapp.com/api/movies/";

window.onload = async () => {
  const currentProducts = document.getElementById("currentProducts");
  console.log("page has been rendered");
  let urlParams = new URLSearchParams(window.location.search);
  id = urlParams.get("id");
  console.log("ID IS", id);
  if (id) {
    let response = await fetch(url + id, {
      method: "GET",
      headers: new Headers({
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZWJkYjg5YzI2ZjAwMTU3ZjljMjkiLCJpYXQiOjE2MTYxNjU4MjgsImV4cCI6MTYxNzM3NTQyOH0.Yt9PO5T_X6GToRS1yhZJ3obOIAgpQ7RDARmW28W1MMU",
        'Content-Type': 'application/json'
        }),
    } );
    let eventDetails = await response.json();
    console.log(eventDetails);

    document.getElementById("productname").value = eventDetails.name;
    document.getElementById("brandDescription").value =
      eventDetails.description;
    document.getElementById("imgURL").value = eventDetails.price
    document.getElementById("cataegory").value = eventDetails.cataegory


  } else {
    document.getElementById("subTitle").innerText = "CREATE EVENT";
  }

}

const handleSubmit = async (e) => {
  e.preventDefault();

    let myEvent = {
    name: document.getElementById("productname").value,
    description: document.querySelector("#brandDescription").value,
    category: document.querySelector("#category").value,
    imageUrl: document.querySelector("#imgURL").value,
  }

  console.log(myEvent);
  let response;

  try { 
    if (id)  {
      response = await fetch(url + id, {
        method: "PUT",
        body: JSON.stringify(myEvent),
        headers:  new Headers(  {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZWJkYjg5YzI2ZjAwMTU3ZjljMjkiLCJpYXQiOjE2MTYxNjU4MjgsImV4cCI6MTYxNzM3NTQyOH0.Yt9PO5T_X6GToRS1yhZJ3obOIAgpQ7RDARmW28W1MMU",
        'Content-Type': 'application/json'
          }),
      });
  }
  
  else{
      response = await fetch ("https://striveschool-api.herokuapp.com/api/movies/", {
      method: "POST",
      body: JSON.stringify(myEvent),
      headers: new Headers( {
        'Content-Type': 'application/json',
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZWJkYjg5YzI2ZjAwMTU3ZjljMjkiLCJpYXQiOjE2MTYxNjU4MjgsImV4cCI6MTYxNzM3NTQyOH0.Yt9PO5T_X6GToRS1yhZJ3obOIAgpQ7RDARmW28W1MMU",
        
        }),
    });
  }

    if (response.ok) {
      // probably everything went well
      alert(`Event was ${id ? "edited" : "created"} successfully!`);
      window.location.assign("index.html")
    } else {
      alert("something went wrong :(");
      // probably something went wrong
    }
  } catch (error) {
    console.log(error);
  }
  }
