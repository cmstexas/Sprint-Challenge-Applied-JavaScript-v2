// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-Container component 

const makeHeader = document.querySelector('.header-container');
makeHeader.appendChild(createHeader());

function createHeader() {
//create elements
const header = document.createElement('div');
const headerDate = document.createElement('span');
const headerTitle = document.createElement('h1');
const headerTemp = document.createElement('span');

//set class names

header.classList.add('header');
headerDate.classList.add('date');
headerTemp.classList.add('temp');

// set text content

headerDate.textContent = "MARCH 28, 2019";
headerTitle.textContent = "Lambda Times";
headerTemp.textContent = "98°";

//setup structure of elements, put together by appending

header.appendChild(headerDate);
header.appendChild(headerTitle);
header.appendChild(headerTemp);

return header;

}

