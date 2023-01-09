const garland = document.querySelector('.garland');
console.log(garland);

let order = 1;

// setInterval(() => {
//   switch (order) {
//     case 1: 
//       garland.classList.add('garland_2');
//       garland.classList.remove('garland_1');
//       order = 2;
//       break;
//     case 2: 
//       garland.classList.add('garland_3');
//       garland.classList.remove('garland_2');
//       order = 3;
//       break;
//     case 3: 
//       garland.classList.add('garland_4');
//       garland.classList.remove('garland_3');
//       order = 4;
//       break;
//     case 4: 
//       garland.classList.add('garland_1');
//       garland.classList.remove('garland_4');
//       order = 1;
//       break;

//   }
// }, 500)