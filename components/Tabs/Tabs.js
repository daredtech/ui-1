
let dummyContent = document.querySelectorAll('.content-tabs');
let dummy = document.querySelectorAll('.tab');
//dummy[0].addEventListener('click', () => console.log("CLICKED"));
dummy[0].addEventListener('click', () => dummyContent[0].style.display = 'flex');
