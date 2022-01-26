'use strict';

console.log('app.jsconnected');
//global Varibles

let productImageTagSection = document.getElementById('all_images');

let firstProductImageTag = document.getElementById('first_product_image');
let secondProductImageTag = document.getElementById('second_product_image');
let thirdProductImageTag = document.getElementById('third_product_image');
console.log(thirdProductImageTag);

let firstProductOnThePage = null;
let secondProductOnThePage = null;
let thirdProductOnThePage = null;

let totalClicks = 0;



//Constructor FunctionExpression
const ProductPicture = function(name, imageSrc){
  this.name = name;
  this.url = imageSrc;
  this.clicks = 0;
  this.timesShone = 0;
  ProductPicture.allImages.push(this);

};
ProductPicture.allImages = [];

// console.log(ProductPicture.allImages);

const renderNewProduct = function(firstIndex, secondIndex){
  console.log(ProductPicture.allImages[firstIndex].url);
  console.log(ProductPicture.allImages[secondIndex].url);
  firstProductImageTag.src = ProductPicture.allImages[firstIndex].url;
  secondProductImageTag.src = ProductPicture.allImages[secondIndex].url;
  // thirdProductImageTag.src = ProductPicture.allImages[thirdIndex].url;
};


//add function for getting a new object from array based on the index number we get back from random generator.
const pickNewProduct = function(){
  const firstIndex = Math.floor(Math.random() * ProductPicture.allImages.length);
  console.log('first index for the first image', firstIndex);

  let secondIndex;
  do {
    secondIndex = Math.floor(Math.random() * ProductPicture.allImages.length);
  } while(secondIndex === firstIndex);
  console.log(ProductPicture.allImages[firstIndex].name + ' and ' + ProductPicture.allImages[secondIndex].name);

  //set to a variable
  firstProductOnThePage = ProductPicture.allImages[firstIndex];
  secondProductOnThePage = ProductPicture.allImages[secondIndex];
  // thirdProductOnThePage = ProductPicture.allImages[thirdIndex];

  renderNewProduct(firstIndex, secondIndex);

};

















const handleClickOnProduct = function(event){
  console.log('clicking on the picture', event.target);
  if(totalClicks < 5){
    const thingWeClickedOn = event.target;
    // console.log('why', thingWeClickedOn.id);
    const id = thingWeClickedOn.id;

    if(id ==='first_product_image' || id === 'second_product_image'){
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
  if (totalClicks === 5){
    productImageTagSection.removeEventListener('click', handleClickOnProduct);
  }
};


productImageTagSection.addEventListener('click', handleClickOnProduct);







//create product obects
new ProductPicture('boots', 'assets/boots.jpg');
new ProductPicture('bag', 'assets/bag.jpg');
new ProductPicture('banana', 'assets/banana.jpg');
new ProductPicture('bathroom', 'assets/bathroom.jpg');
new ProductPicture('breakfast', 'assets/breakfast.jpg');
new ProductPicture('bubblegum', 'assets/bubblegum.jpg');
new ProductPicture('chair', 'assets/chair.jpg');
new ProductPicture('cthuthu', 'assets/cthuthu.jpg');
new ProductPicture('dog-duck', 'assets/dog-duck.jpg');
new ProductPicture('dragon', 'assets/dragon.jpg');
new ProductPicture('pen', 'assets/pen.jpg');
new ProductPicture('pet-sweep', 'assets/pet-sweep.jpg');
new ProductPicture('scissors', 'assets/scissors.jpg');
new ProductPicture('shark', 'assets/shark.jpg');
new ProductPicture('sweep', 'assets/sweep.png');
new ProductPicture('tauntaun', 'assets/tauntaun.jpg');
new ProductPicture('unicorn', 'assets/unicorn.jpg');
new ProductPicture('water-can', 'assets/water-can.jpg');
new ProductPicture('wine-glass', 'assets/wine-glass.jpg');

firstProductOnThePage = ProductPicture.allImages[0];
secondProductOnThePage = ProductPicture.allImages[1];
thirdProductOnThePage = ProductPicture.allImages[2];


pickNewProduct();
