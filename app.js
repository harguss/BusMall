'use strict';

console.log('app.jsconnected');
//global Varibles
let totalClicks = 0;
const allProducts = [];


let firstProductOnThePage;
let secondProductOnThePage;
let thirdProductOnThePage;
// let previouslyPickedProduct = [];


let productImageSectionTag = document.getElementById('all_images');

let firstProductImage = document.getElementById('first_product_image');
let secondProductImage = document.getElementById('second_product_image');
let thirdProductImage = document.getElementById('third_product_image');


// let chartResults = document.getElementById('chartResults');
// let resultsList = document.getElementById('resultsList');







//Constructor FunctionExpression
const ProductPicture = function(name, imageSrc){
  this.name = name;
  this.imageSrc = imageSrc;
  this.clicks = 0;
  this.timesShone = 0;
  allProducts.push(this);
};

// allProducts = [];

// console.log(allImages);

const renderNewProduct = function(firstIndex, secondIndex, thirdIndex){
  console.log(allProducts[firstIndex].imageSrc);
  console.log(allProducts[secondIndex].imageSrc);
  console.log(allProducts[thirdIndex].imageSrc);
  firstProductImage.src = allProducts[firstIndex].imageSrc;
  secondProductImage.src = allProducts[secondIndex].imageSrc;
  thirdProductImage.src = allProducts[thirdIndex].imageSrc;
};


//add function for getting a new object from array based on the index number we get back from random generator.
const pickNewProduct = function(){
  const firstIndex = Math.floor(Math.random() * allProducts.length);
  console.log('first index for the first image', firstIndex);

  let secondIndex;
  do {
    secondIndex = Math.floor(Math.random() * allProducts.length);
  } while(secondIndex === firstIndex);
  console.log(allProducts[firstIndex].name + ' and ' + allProducts[secondIndex].name);

  let thirdIndex;
  do {
    thirdIndex = Math.floor(Math.random() * allProducts.length);
  }while(thirdIndex === secondIndex);
  console.log(allProducts[secondIndex].name + ' and ' + allProducts[thirdIndex].name);

  //set to a variable
  firstProductOnThePage = allProducts[firstIndex];
  secondProductOnThePage = allProducts[secondIndex];
  thirdProductOnThePage = allProducts[thirdIndex];

  renderNewProduct(firstIndex, secondIndex , thirdIndex);

};


///////
function handleClickOnProduct(event){
  // console.log('clicking on the picture', event.target);
  if(totalClicks < 25){
    const thingWeClickedOn = event.target;
    // console.log('why', thingWeClickedOn.id);
    const id = thingWeClickedOn.id;

    if(id ==='first_product_image' || id === 'second_product_image' || id === 'third_product_image'){
    //increment the image in the first slot
      if(id === 'first_product_image'){
        firstProductOnThePage.clicks++;
      }
      //increment the image in the second slot
      if(id === 'second_product_image'){
        secondProductOnThePage.clicks++;
      }
      if(id === 'third_product_image'){
        thirdProductOnThePage.clicks++;
      }
      firstProductOnThePage.timesShone++;
      secondProductOnThePage.timesShone++;
      thirdProductOnThePage.timesShone++;

      pickNewProduct();
    }


  }


  totalClicks++;
  console.log(totalClicks);
  if (totalClicks === 25){
    makeAProductChart();
    productImageSectionTag.removeEventListener('click', handleClickOnProduct);
  }
}

productImageSectionTag.addEventListener('click', handleClickOnProduct);

///////
function makeAProductChart(){

  const productNamesArray = [];
  const productClicksArray = [];
  for(let i = 0; i< allProducts.length; i++){
    const singleProductName = allProducts[i].name;
    productNamesArray.push(singleProductName);
  }
  for(let i = 0; i< allProducts.length; i++){
    const singleProductClicks = allProducts[i].clicks;
    productClicksArray.push(singleProductClicks);
  }


  ////////////CHART



  const ctx = document.getElementById('myChart').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: productNamesArray,
      datasets: [{
        label: 'Product Clicks',
        data: ['productClicksArray'],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

}


//create product obects
new ProductPicture('boots', 'assets/boots.jpg'); //0
new ProductPicture('bag', 'assets/bag.jpg'); // 1
new ProductPicture('banana', 'assets/banana.jpg'); //2
new ProductPicture('bathroom', 'assets/bathroom.jpg');
new ProductPicture('breakfast', 'assets/breakfast.jpg');
new ProductPicture('bubblegum', 'assets/bubblegum.jpg');
new ProductPicture('chair', 'assets/chair.jpg');
new ProductPicture('cthulhu', 'assets/cthulhu.jpg');
new ProductPicture('dog-duck', 'assets/dog-duck.jpg');
new ProductPicture('dragon', 'assets/dragon.jpg');
new ProductPicture('pen', 'assets/pen.jpg');
new ProductPicture('pet-sweep', 'assets/pet-sweep.jpg');
new ProductPicture('scissors', 'assets/scissors.jpg');
new ProductPicture('shark', 'assets/shark.jpg');
new ProductPicture('sweep', 'assets/sweep.jpg');
new ProductPicture('tauntaun', 'assets/tauntaun.jpg');
new ProductPicture('unicorn', 'assets/unicorn.jpg');
new ProductPicture('water-can', 'assets/water-can.jpg');
new ProductPicture('wine-glass', 'assets/wine-glass.jpg');

firstProductOnThePage = allProducts[0];
secondProductOnThePage = allProducts[1];
thirdProductOnThePage = allProducts[2];


pickNewProduct();

