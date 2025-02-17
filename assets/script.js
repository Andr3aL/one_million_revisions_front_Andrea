// alert("je suis connecté");

// let images = document.querySelector(".card-img");


let images = document.getElementsByClassName('card-img');

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseover', () => {
        images[i].style.opacity = 1;
    });

    images[i].addEventListener('mouseout', () => {
        images[i].style.opacity = 0;
    });
}

