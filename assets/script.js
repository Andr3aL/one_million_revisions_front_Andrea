// alert("je suis connecté");

// let images = document.querySelector(".card-img");


// let images = document.getElementsByClassName('card-img');

// let image1 = document.getElementsByClassName('card-img')[0];
// let image2 = document.getElementsByClassName('card-img')[1];
// let image3 = document.getElementsByClassName('card-img')[2];
// let image4 = document.getElementsByClassName('card-img')[3];

// console.log(image1);
// console.log(image2);
// console.log(image3);
// console.log(image4);


// for (let i = 0; i < images.length; i++) {
//     images[i].addEventListener('mouseenter', () => {
//         images[i].classList.add("card-img2");
//         images[i].classList.remove("card-img");
//     });

//     images[i].addEventListener('mouseout', () => {
//         images[i].classList.remove("card-img2");
//         images[i].classList.add("card-img");
//     });
// }


console.log(document.getElementsByClassName('card-img'));
console.log("Script chargé !");



// // image 1
// image1.addEventListener('mouseenter', () => {
//     console.log("Mouse entered on image1");
//     image1.classList.add("card-img2");
//     image1.classList.remove("card-img");
// });

// image1.addEventListener('mouseout', () => {
//     console.log("Mouse left image1");
//     image1.classList.remove("card-img2");
//     image1.classList.add("card-img");
// });

// // image 2
// image2.addEventListener('mouseenter', () => {
//     image2.classList.add("card-img2");
//     image2.classList.remove("card-img");
// });

// image2.addEventListener('mouseout', () => {
//     image2.classList.remove("card-img2");
//     image2.classList.add("card-img");
// });

// // image 3
// image3.addEventListener('mouseenter', () => {
//     image3.classList.add("card-img2");
//     image3.classList.remove("card-img");
// });

// image3.addEventListener('mouseout', () => {
//     image3.classList.remove("card-img2");
//     image3.classList.add("card-img");
// });

// // image 4
// image4.addEventListener('mouseenter', () => {
//     image4.classList.add("card-img2");
//     image4.classList.remove("card-img");
// });

// image4.addEventListener('mouseout', () => {
//     image4.classList.remove("card-img2");
//     image4.classList.add("card-img");
// });

// document.addEventListener("DOMContentLoaded", () => {
//     let cards = document.getElementsByClassName('card');

//     for (let i = 0; i < cards.length; i++) {
//         console.log(`Card ${i} trouvée`, cards[i]); 

//         cards[i].addEventListener('mouseenter', () => {
//             console.log(`Mouse entered on card ${i}`);
//             let img = cards[i].querySelector('.card-img');
//             if (img) {
//                 img.classList.add("card-img2");
//                 img.classList.remove("card-img");
//             }
//         });

//         cards[i].addEventListener('mouseout', () => {
//             console.log(`Mouse left card ${i}`);
//             let img = cards[i].querySelector('.card-img');
//             if (img) {
//                 img.classList.remove("card-img2");
//                 img.classList.add("card-img");
//             }
//         });
//     }
// });


document.addEventListener("DOMContentLoaded", () => {
    let cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        console.log(`Card ${i} trouvée`, cards[i]); 

        let img = cards[i].querySelector('img'); // Sélectionne l'image directement

        if (img) { 
            cards[i].addEventListener('mouseenter', () => {
                console.log(`Mouse entered on card ${i}`);
                img.classList.add("card-img2");
                img.classList.remove("card-img");
            });

            cards[i].addEventListener('mouseout', () => {
                console.log(`Mouse left card ${i}`);
                img.classList.remove("card-img2");
                img.classList.add("card-img");
            });
        }
    }
});


// ******************* FORM *********************

// let myForm = document.querySelector("#formform");
// let inputPrenom = document.querySelector("#prenom");
// let inputNom = document.querySelector("#nom");
// let inputEmail = document.querySelector("#email");
// let valuePrenom = inputPrenom.value.trim();
//     let valueNom = inputNom.value.trim();
//     let valueEmail = inputEmail.value;
//     let lengthPrenom = valuePrenom.length;
//     let lengthNom = valueNom.length;
//     let regexMail = /^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
// console.log(myForm);
// console.log("Prenom:", valuePrenom, "Length:", lengthPrenom);
// console.log("Nom:", valueNom, "Length:", lengthNom);
// console.log("Email:", valueEmail, "Valid Email:", regexMail.test(valueEmail));

// myForm.addEventListener("submit", function(event){
//     event.preventDefault();

//     if(lengthPrenom < 3 || lengthNom < 3 || !regexMail.test(valueEmail)) {

//         document.querySelector("#prenomError").classList.remove("d-none");
//         document.querySelector("#prenomError").classList.add("error");
//         document.querySelector("#nomError").classList.remove("d-none");
//         document.querySelector("#nomError").classList.add("error");
//         document.querySelector("#emailError").classList.remove("d-none");
//         document.querySelector("#emailError").classList.add("error");
        
//     } else {

//         document.querySelector("#prenomError").classList.add("d-none");
//         document.querySelector("#nomError").classList.add("d-none");
//         document.querySelector("#emailError").classList.add("d-none");

//         inputPrenom.classList.add("text-success");
//         inputNom.classList.add("text-success");
//         inputEmail.classList.add("text-success");
        
//     }
// });








// document.addEventListener("DOMContentLoaded", function () {
//     let inputPrenom = document.querySelector("#prenom");
//     let inputNom = document.querySelector("#nom");
//     let inputEmail = document.querySelector("#email");

//     console.log("Prenom trouvé ?", inputPrenom);
//     console.log("Nom trouvé ?", inputNom);
//     console.log("Email trouvé ?", inputEmail);
//     let myForm = document.querySelector("#formform");

//     if (!myForm) {
//         console.log("⚠️ Formulaire introuvable !");
//         return;
//     }

//     console.log("✅ Formulaire trouvé !");

//     myForm.addEventListener("submit", function (event) {
//         event.preventDefault(); // Bloque l’envoi du formulaire

//         console.log("🚀 Événement submit détecté !");
//     });
// });









document.addEventListener("DOMContentLoaded", function () {
    console.log("script chargé !");
    
    let myForm = document.querySelector("#formform");
    let inputPrenom = document.querySelector("#prenom");
    let inputNom = document.querySelector("#nom");
    let inputEmail = document.querySelector("#email");
    let inputTextarea = document.querySelector("#exampleFormControlTextarea1");

    myForm.addEventListener("submit", function (event) {
        if (!myForm) {
            console.log("Formulaire introuvable !");
            return;
        }
        event.preventDefault(); // Bloque l'envoi du formulaire

        let valuePrenom = inputPrenom.value.trim();
        let valueNom = inputNom.value.trim();
        let valueEmail = inputEmail.value.trim();
        let valueTextarea = inputTextarea.value.trim();

        let lengthPrenom = valuePrenom.length;
        let lengthNom = valueNom.length;
        let regexMail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
        let lengthTextarea = valueTextarea.length;

        let isValid = true; // Variable pour savoir si tout est bon

        // Vérification du prénom
        if (lengthPrenom < 3) {
            document.querySelector("#prenomError").classList.remove("d-none");
            document.querySelector("#prenomError").classList.add("text-danger");
            document.querySelector("#prenomError").classList.add("fst-italic");
            document.querySelector("#prenom").classList.add("is-invalid");
            isValid = false;
        } else {
            document.querySelector("#prenomError").classList.add("d-none");
            document.querySelector("#prenom").classList.remove("is-invalid");
            document.querySelector("#prenom").classList.add("is-valid");
        }

        // Vérification du nom
        if (lengthNom < 3) {
            document.querySelector("#nomError").classList.remove("d-none");
            document.querySelector("#nomError").classList.add("text-danger");
            document.querySelector("#nomError").classList.add("fst-italic");
            document.querySelector("#nom").classList.add("is-invalid");
            isValid = false;
        } else {
            document.querySelector("#nomError").classList.add("d-none");
            document.querySelector("#nom").classList.remove("is-invalid");
            document.querySelector("#nom").classList.add("is-valid");
        }

        // Vérification de l'email
        if (!regexMail.test(valueEmail)) {
            document.querySelector("#emailError").classList.remove("d-none");
            document.querySelector("#emailError").classList.add("text-danger");
            document.querySelector("#emailError").classList.add("fst-italic");
            document.querySelector("#email").classList.add("is-invalid");
            isValid = false;
        } else {
            document.querySelector("#emailError").classList.add("d-none");
            document.querySelector("#email").classList.remove("is-invalid");
            document.querySelector("#email").classList.add("is-valid");
        }

        // Vérification du textarea
        if (lengthTextarea < 2) {
            document.querySelector("#exampleFormControlTextarea1").classList.add("is-invalid");
            isValid = false;
        } else {
            document.querySelector("#exampleFormControlTextarea1").classList.remove("is-invalid");
            document.querySelector("#exampleFormControlTextarea1").classList.add("is-valid");
        }


        // Debugging : voir ce qui se passe en console
        console.log("Prenom:", valuePrenom, "Length:", lengthPrenom);
        console.log("Nom:", valueNom, "Length:", lengthNom);
        console.log("Email:", valueEmail, "Valid Email:", regexMail.test(valueEmail));
        console.log("Form valid:", isValid);
    });
});







