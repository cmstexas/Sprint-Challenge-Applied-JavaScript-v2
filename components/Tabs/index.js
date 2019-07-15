// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// const tab = document.querySelector('.tabs');
const topics = document.querySelector('.topics');

   axios.get('https://lambda-times-backend.herokuapp.com/topics')
   .then(response => {
     //Handles success, successfuly got tab data from server!!!!
    //  console.log('data', response.data);
     const api = response.data
    //  console.log(response);
    //  console.log(api);
    //  console.log(api.topics);
      api.topics.forEach(atopic => {
      topics.appendChild(createTab(atopic));
   });
  })
  
  .catch(error => {
   //handles failure//
   console.log('ERROR:', error)
  })

function createTab(atopic) {
    //create elements
    // const tabs = document.createElement('div');
    const tab = document.createElement('div');
    // const tabsTopics = document.createElement('div');
    // const tabsTitle = document.createElement('span');
    
    //set class names 
    // tabs.classList.add('tabs');
    tab.classList.add("tab");
    // tabsTopics.classlist.add('topics');
    // tabsTitle.classlist.add('title');

    // set text content
    tab.textContent = atopic;
    // tabsTitle.textContent = 'Trending Topics'


    //setup structure of elements, put together by appending
    // tabs.appendChild(tab);
    // tab.appendChild(tabsTopics);
    // tab.appendChild(tabsTitle);


return tab
}



//TABS HTML//
// <!-- TABS COMPONENT, PLACE TABS HERE-->
// <div class="tabs">
//   <div class="topics">
//     <span class="title">TRENDING TOPICS:</span>
//   </div>
// </div>

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
  

