// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// <!-- CARDS CONTAINER, PLACE ARTICLE CARDS HERE -->
//   <div class="cards-container">
//   </div>


const cardContainer = document.querySelector('.cards-container');


axios.get('https://lambda-times-backend.herokuapp.com/articles')
   .then(response => {
     //Handles success, successfuly got articles from server!!!!
     console.log('data', response.data);
    //  tabs.appendChild(createTab(response.data))

    //********ADD .MAP FUNCTION HERE */
   })
  
  .catch(error => {
   //handles failure//
   console.log('ERROR:', error)
  })




function createArticles(object) {
    //create elements 

    const card = document.createElement('div');
    const cardHeadline = document.createElement('div');
    const cardAuthor = document.createElement('div');
    const imageContainer = document.createElement('div');
    const cardImage = document.createElement('img');
    const byAuthor = document.createElement('span');

    //set class names 

    card.classList.add('card');
    cardHeadline.classList.add('headline');
    cardAuthor.classList.add('author');
    imageContainer.classList.add('img-container');

    // set text content
    cardHeadline.textContent = `Headline: ${object.headline}`;
    cardAuthor.textContent = `Author: ${object.authorName}`;

    //set user data 
    cardImage.src = object.authorPhoto;

    //setup structure of elements, put together by appending
    card.appendChild(cardHeadline)
    card.appendChild(cardAuthor)
    imageContainer.appendChild(imageContainer)
    cardAuthor.appendChild(cardImage)
    cardAuthor.appendChild(byAuthor)

    return card;

}



  
// // OLD PROJECT NOTES
//  const tabsArray = []

// // tabsArray.forEach(users => {
// //     axios.get('https://lambda-times-backend.herokuapp.com/topics')
// //    .then(response => {
// //      //Handles success, here's where we get the results from the server
// //      console.log('data', response.data);
// //      tabs.appendChild(createTab(response.data))
// //    })
  
// //   .catch(error => {
// //    //handles failure//
// //    console.log('ERROR:', error)
// //   })
// //    })