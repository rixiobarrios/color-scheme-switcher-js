/**
 * BASIC SOLUTION
 */
// select the button
const redButton = document.querySelector('.red');
const whiteButton = document.querySelector('.white');
const blueButton = document.querySelector('.blue');
const yellowButton = document.querySelector('.yellow');

// add event listener
redButton.addEventListener('click', makeRed);
whiteButton.addEventListener('click', makeWhite);
blueButton.addEventListener('click', makeBlue);
yellowButton.addEventListener('click', makeYellow);

// define the callback functions
function makeRed(evt) {
    evt.preventDefault();
    document.body.style.backgroundColor = 'red';
    document.body.style.color = 'white';
}

function makeWhite(evt) {
    evt.preventDefault();
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
}

function makeBlue(evt) {
    evt.preventDefault();
    document.body.style.backgroundColor = 'blue';
    document.body.style.color = 'white';
}

function makeYellow(evt) {
    evt.preventDefault();
    document.body.style.backgroundColor = 'yellow';
    document.body.style.color = 'black';
}

/**
 * USING EVENT PROPAGATION
 */
// const colorSwitcher = document.querySelector('.js-buttons');

// colorSwitcher.addEventListener('click', changeColorRefactoredVersion);

// function changeColor(evt) {
//   console.log('which button was clicked?', evt.target.dataset.color);
//   const buttonColorClicked = evt.target.dataset.color;

//   // if button clicked was red, change background color to red and text to white
//   if (buttonColorClicked === 'red') {
//     document.body.style.backgroundColor = 'red';
//     document.body.style.color = 'white';
//   }

//   // if button clicked was white, change background color to white and text to black
//   if (buttonColorClicked === 'white') {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }

//   // if button clicked was blue, change background color to blue and text to white
//   if (buttonColorClicked === 'blue') {
//     document.body.style.backgroundColor = 'blue';
//     document.body.style.color = 'white';
//   }

//   // if button clicked was yellow, change background color to yellow and text to black
//   if (buttonColorClicked === 'yellow') {
//     document.body.style.backgroundColor = 'yellow';
//     document.body.style.color = 'black';
//   }
// }

// function changeColorRefactoredVersion(evt) {
//   console.log(evt);
//   // create a color mapping, {}
//   const colorMapping = {
//     red: {
//       backgroundColor: 'red',
//       color: 'white'
//     },
//     white: {
//       backgroundColor: 'white',
//       color: 'black'
//     },
//     blue: {
//       backgroundColor: 'blue',
//       color: 'white'
//     },
//     yellow: {
//       backgroundColor: 'yellow',
//       color: 'black'
//     }
//   };
//   // update the document style with the correct background color and text color from the mapping
//   // which background color and text color should be applied?
// const buttonColorClicked = evt.target.dataset.color;

// console.log(colorMapping[buttonColorClicked]);
//   document.body.style.backgroundColor =
//     colorMapping[buttonColorClicked].backgroundColor;
//   document.body.style.color = colorMapping[buttonColorClicked].color;
//     }
// }
