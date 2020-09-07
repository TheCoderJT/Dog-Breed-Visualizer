// Returns a random image of dog no matter the breed
const IMG_BY_BREED = "https://dog.ceo/api/breed/hound/images/random";
const defaultOpition = document.querySelector(`.default`).selected = true;
const select = document.querySelector(`.breed`);
const optionEle = document.getElementsByTagName("option");

//Returns all the breeds
const BREEDS = `https://dog.ceo/api/breeds/list/all`;

function getBreeds(){
    fetch(BREEDS)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        const breedObject = data.message;
        const breedsArray = Object.keys(breedObject);
        //console.log("Breeds Array", breedsArray);
        for(let i = 0; i < breedsArray.length; i++){
            const opts = document.createElement(`option`);
            opts.value = breedsArray[i];
            opts.innerText = breedsArray[i];
            select.appendChild(opts);
        }

    })
}

getBreeds();

const spinner = document.querySelector(`.spinner`);

select.addEventListener(`change`, function(event){
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
    getDoggo(url);
});


let image = document.querySelector(`.dog-image`);

function getDoggo(url){
    spinner.classList.add(`show`);
    image.classList.remove(`show`);
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
           image.src = data.message;     
        })       
}

image.addEventListener(`load`, function(){
    spinner.classList.remove(`show`);
    image.classList.add(`show`);
})


