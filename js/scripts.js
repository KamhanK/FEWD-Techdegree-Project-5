/* Search Code */

// const attrData = $('a').attr('data-title');
// console.log(attrData);


const searchString = document.getElementById('search');
const attrSearchString = document.getElementsByTagName('a')
const attrData = attrSearchString[0].getAttribute('data-title');

for (let i = 0; i < attrData.length; i += 1) {
    const attrData = attrSearchString[0].getAttribute('data-title');
    console.log(attrData);
}

addEventListener('keyup', logKey);
function logKey(event) {
    console.log(searchString.value.toLowerCase());
    
}


// document.getElementById('search').addEventListener('keyup', searchFunction);
// const searchString = document.getElementById('search');
// searchString.value = searchString.value.toLowerCase();
// console.log(searchString);

/* Lightbox Code */

lightbox.option({
    'showImageNumberLabel': false,
    'maxWidth': 750,
    'positionFromTop': 210,
    'wrapAround': true
    
})











