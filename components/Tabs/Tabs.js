
// on load
//   if no active tab - display default, change the tab border
//   else             - display active, change the tab border
var activeTab = null;
const topics = document.querySelector('.topics');
topics.addEventListener("load", displayDefault());

function displayDefault() {
  if(activeTab === null){
    activeTab = document.querySelector(`.content-tabs[data-tab='grow']`);
    activeTab.style.display = "flex";
  }
}

// create a collection of all the tabs,
// add event eventlistener to each item
// when clicked    - clear all the displays, set current to active, display active

let tabs = document.querySelectorAll('.tab');
let tabsContentCollection = document.querySelectorAll('.content-tabs');
let clickedTab = null;

tabs.forEach(item => item.addEventListener('click', () => updateActive(item)));

function updateActive(item){
  console.log(item);
  clickedTab = item.dataset.tab;
  console.log(clickedTab);
  tabsContentCollection.forEach(item => item.style.display = 'none');
  activeTab = document.querySelector(`.content-tabs[data-tab='${clickedTab}']`);
  activeTab.style.display = "flex";

}