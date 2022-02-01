'use strict';

console.log('app.jsconnected');

let totalClicks = 0;
const allProducts = [];
let preImgSeen = [];

let firstProductOnThePage;
let secondProductOnThePage;
let thirdProductOnThePage;
let productImageSectionTag = document.getElementById('all_images');
let firstProductImage = document.getElementById('first_product_image');
let secondProductImage = document.getElementById('second_product_image');
let thirdProductImage = document.getElementById('third_product_image');
let chartResults = document.getElementById('chartResults');
let resultsList = document.getElementById('resultsList');


const ProductPicture = function(name, imageSrc, clicks, timesShone){
  this.name = name;
  this.imageSrc = imageSrc;
  //add if statement or click updating
  if(clicks){
    this.clicks = clicks;
  } else {
    this.clicks = 0;
  }
  if(timesShone){
    this.timesShown = timesShone;
  } else {
    this.timesShown = 0;
  }
  allProducts.push(this);
};

this.clicks = 0;
this.timesShone = 0;
allProducts.push(this);



let savedProductString = localStorage.getItem('savedProducts');
if(savedProductString){
  console.log('this is the objects in string form ', savedProductString);

  //parse string into objects
  let arrayOfNotProductObject = JSON.parse(savedProductString);
  console.log('if condition what is our type ',arrayOfNotProductObject);
  //once we have object we are going to run them through our constructor function so that they are Pizza objects.

  //use a for loop to run objects through our constructor function
  for(let j = 0; j < arrayOfNotProductObject.length; j++){
    new ProductPicture(
      arrayOfNotProductObject[j].name,
      arrayOfNotProductObject[j].imageSrc,
      arrayOfNotProductObject[j].timesClicked,
      arrayOfNotProductObject[j].timesShown
    );
  }
  //use a for loop to run objects through our constructor function
} else {

  //create product objects
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
}
firstProductOnThePage = allProducts[0];
secondProductOnThePage = allProducts[1];
thirdProductOnThePage = allProducts[2];




function handleClickOnProduct(event){
  totalClicks++;
  firstProductOnThePage.timesShone++;
  secondProductOnThePage.timesShone++;
  thirdProductOnThePage.timesShone++;

  if(event.target.id === 'first_product_image'){
    firstProductOnThePage.clicks++;
  }

  if(event.target.id === 'second_product_image'){
    secondProductOnThePage.clicks++;
  }
  if(event.target.id === 'third_product_image'){
    thirdProductOnThePage.clicks++;
  }
  //image randomization
  let currentImgs = [];
  let firstIndex;
  do {
    firstIndex = Math.floor(Math.random() * allProducts.length);
  } while(currentImgs.includes(allProducts[firstIndex]) ||
  preImgSeen.includes(allProducts[firstIndex])
  );
  currentImgs.push(allProducts[firstIndex]);


  let secondIndex;
  do {
    secondIndex = Math.floor(Math.random() * allProducts.length);
  } while(currentImgs.includes(allProducts[secondIndex]) ||
  preImgSeen.includes(allProducts[secondIndex])
  );
  currentImgs.push(allProducts[secondIndex]);

  let thirdIndex;
  do {
    thirdIndex = Math.floor(Math.random() * allProducts.length);
  }while(currentImgs.includes(allProducts[thirdIndex]) ||
  preImgSeen.includes(allProducts[thirdIndex])
  );
  currentImgs.push(allProducts[thirdIndex]);


  firstProductOnThePage = allProducts[firstIndex];
  secondProductOnThePage = allProducts[secondIndex];
  thirdProductOnThePage = allProducts[thirdIndex];


  firstProductImage.src = allProducts[firstIndex].imageSrc;
  secondProductImage.src = allProducts[secondIndex].imageSrc;
  thirdProductImage.src = allProducts[thirdIndex].imageSrc;

  preImgSeen = [];
  preImgSeen.push(allProducts[firstIndex]);
  preImgSeen.push(allProducts[secondIndex]);
  preImgSeen.push(allProducts[thirdIndex]);



  if(totalClicks === 25){
    // makeAProductChart();
    productImageSectionTag.removeEventListener('click', handleClickOnProduct);
    localStorage.setItem('savedProducts', JSON.stringify(allProducts));
  }
}



function handleResultsList(){
  document.getElementById('product-clicks').style.background = '#8197c9';
  document.getElementById('product-clicks').style.color = 'whitesmoke';

  let ul = document.getElementById('product-clicks');
  ul.innerHTML ='';
  for(let i = 0; i < allProducts.length; i++){
    let current = allProducts[i];
    let li = document.createElement('li');
    li.textContent = current.name + ' got ' + current.clicks + ' votes';
    ul.appendChild(li);
  }
}

function handleChartResults(){
  makeAProductChart();
}















productImageSectionTag.addEventListener('click', handleClickOnProduct);
resultsList.addEventListener('click', handleResultsList);
chartResults.addEventListener('click', handleChartResults);


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



  const ctx = document.getElementById('myChart').getContext('2d');
  console.log(ctx);
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: productNamesArray,
      datasets: [{
        label: 'Product Clicks',
        data: productClicksArray,
        // data: productClicksArray,
        backgroundColor: [
          'rgba(200, 7, 49, 1.2)',
          'rgba(54, 162, 235, 1.2)',
          'rgba(255, 206, 86, 1.2)',
          'rgba(75, 200, 255, 1.2)',
          'rgba(7, 179, 21, 1.2)',
          'rgba(255, 159, 64, 1.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 2
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







