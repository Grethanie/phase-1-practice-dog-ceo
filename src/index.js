console.log("%c HI", "color: firebrick");

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", async () => {
  // fetch(imgUrl)
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (data) {
  //     data.message.forEach((picture) => {
  //       let img = document.createElement("img");
  //       img.src = picture;
  //       document.querySelector("#dog_image_container").appendChild(img);
  //     });
  //   });

  let data = await (await fetch(imgUrl)).json();
  data.message.forEach((picture) => {
    let img = document.createElement("img");
    img.src = picture;
    document.querySelector("#dog_image_container").appendChild(img);
  });

  let breedList

  fetch(breedUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let breed in data.message) {
        data.message[breed].forEach((subBreed) => {
          let dog = document.createElement("li");
          dog.innerText = `${breed}, ${subBreed}`;
          breedList.push(dog.innerText)
          // let initial = breed.charAt(0);
          // dog.className = initial;
          dog.addEventListener("click", (e) => {
            console.log(e);
            let element = e.target;
            element.style.color = "#FF0000";
          });
        });
      }
    });
});
