/* Search Code */

// const attrData = $('a').attr('data-title');
// console.log(attrData);


const searchString = document.getElementById('search');

addEventListener('keyup', logKey);
function logKey(event) {
    const attrSearchString = searchString.getAttribute('data-title');
    if ( attrSearchString === searchString ) {
    console.log(searchString.value.toLowerCase());
    }
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











