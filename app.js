'use strict';

console.log('app.jsconnected');
//global Varibles





//Constructor FunctionExpression
const ProductPicture = function(name, imageSrc){
  this.name = name;
  this.imageSrc = imageSrc;
  this.clicks = 0;
  this.timesShone = 0;
  ProductPicture.allImages.push(this);

};
ProductPicture.allImages = [];
console.log(ProductPicture.allImages);






























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


