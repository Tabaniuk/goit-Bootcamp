// const source = document.querySelector('#address-template').innerHTML.trim();
// // console.log(source);
// const temp = Handlebars.compile(source);
// // console.log(temp);
// const context = {
//     "city": "London",
//     "street": "Baker Street",
//     "number": "221B"
// };
//
//
// const markup = temp(context);
// console.log(markup);
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = markup;

/*
const data = {
    people: [
        {firstName: 'Homer', lastName: 'Simpson'},
        {firstName: 'Peter', lastName: 'Griffin'},
        {firstName: 'Eric', lastName: 'Cartman'},
        {firstName: 'Kenny', lastName: 'McCormick'},
        {firstName: 'Bart', lastName: 'Simpson'}
    ]
};
//
const source = document.querySelector('#example-template').innerHTML.trim();
const template = Handlebars.compile(source);
const person = template(data);
const container = document.querySelector('.content-placeholder');
container.innerHTML = person;*/

/*

const menuData = {
    title: 'Eat it createElement, templates rule!',
    items: ['Handlebars', 'LoDash', 'Pug', 'EJS']
};
const source = document.querySelector('#menu').innerHTML.trim();
const template = Handlebars.compile(source);
const markup = template(menuData);
const container = document.querySelector('#menu-container');
container.innerHTML = markup;*/
/*
const data = {
    animals:[
        {
            name: "cow",
            noise: "moooo"
        },
        {
            name: "cat",
            noise: "meow"
        },
        {
            name: "fish",
            noise: ""
        },
        {
            name: "farmer",
            noise: "Get off my property!"
        }
    ]
};*/

/*const gallery = {
    title: 'Gallery',
    items: [
        {img: 'https://placeimg.com/300/150/animals', text: 'animals'},
        {img: 'https://placeimg.com/300/150/arch', text: 'architecture'},
        {img: 'https://placeimg.com/300/150/nature', text: 'nature'},
        {img: 'https://placeimg.com/300/150/people', text: 'people'},
        {img: 'https://placeimg.com/300/150/tech', text: 'tech'},
        {img: 'https://placeimg.com/300/150/any', text: 'random'}
    ]
}

const source = document.querySelector('#gallery').innerHTML.trim();
const template = Handlebars.compile(source);
const container = document.querySelector('.gallery-content');
container.innerHTML = template(gallery);*/

let data = {
    phones: [
        {
            id: "1",
            categoryId: "1",
            name: "Apple iPhone 5c",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 823,
            image: "img/uploads/iphone5c-selection-hero-2013.png",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        },
        {
            id: "2",
            categoryId: "1",
            name: "Apple iPhone 6",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 953,
            image: "img/uploads/51u6y9Rm8QL._SY300_.jpg",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        },
        {
            id: "3",
            categoryId: "4",
            name: "Lenovo A6000",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 764,
            image: "img/uploads/_35%20(1).JPG",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        },
        {
            id: "4",
            categoryId: "5",
            name: "Nokia Lumia 1520",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 674,
            image: "img/uploads/Lumia1520-Front-Back-png.png",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        },
        {
            id: "5",
            categoryId: "3",
            name: "HTC One",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 674,
            image: "img/uploads/htc-one-m7-802w-dual-sim-silver.jpg",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        },
        {
            id: "6",
            categoryId: "2",
            name: "Samsung Galaxy S6",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 674,
            image: "img/uploads/Agnes_Case_for_Samsung_Galaxy_S6_(1)__92643_thumb.jpg",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        }
    ]
};

const source = document.querySelector('#gallery').innerHTML.trim();
const template = Handlebars.compile(source);
const container = document.querySelector('.container');
container.innerHTML = template(data);

const buttons = document.querySelectorAll('.module-card-button');
const infos = document.querySelectorAll('.hide');

container.addEventListener('click', clickHandler)
function clickHandler (event) {
    buttons.forEach((el, idx) => {
        if(event.target === el){
            infos[idx].classList.toggle('show')
        }
    })
}