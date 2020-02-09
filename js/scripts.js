/* Search Code */

// const attrData = $('a').attr('data-title');
// console.log(attrData);


const searchString = document.getElementById('search');
const attrSearchString = document.getElementsByTagName('a')


addEventListener('keyup', logKey);
function logKey(event) {
    console.log(searchString.value.toLowerCase());
    
}

for (let i = 0; i < attrSearchString.length; i += 1) {
    const attrData = attrSearchString[i].getAttribute('data-title');
    console.log(attrData);
}


/* Lightbox Code */

lightbox.option({
    'showImageNumberLabel': false,
    'maxWidth': 750,
    'positionFromTop': 210,
    'wrapAround': true
    
})











