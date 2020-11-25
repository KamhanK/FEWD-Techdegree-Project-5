/* Search Filter */

const searchString = document.getElementById('search');
const a = document.getElementsByClassName('item');

/* This event listener listens for any keyup events in the input search field and displays the resulting thumbnails of the search. */

searchString.addEventListener('keyup', () => {
    const input = searchString.value.toLowerCase();

    for (let i = 0; i < a.length; i += 1) {
        const attrData = a[i].getAttribute('data-title');
        if (attrData.toLowerCase().indexOf(input) > -1) {
            a[i].style.display = "";
            } else {
            a[i].style.display = "none";
            }
    }
});

/* This event listener listens for a null value in the input search field so the search results are reset and all thumbnails are displayed. */

searchString.addEventListener('search', () => {
    if (event.target.value === '') {
      for (let i = 0; i < a.length; i += 1) {
        a[i].style.display = "";
      }
    }
});

/* jQuery Search Filter */

// $(document).ready(function(){
//     $("#search").on("keyup search", function() {
//       var value = $(this).val().toLowerCase();
//       $('.item').filter(function() {
//         $(this).toggle($(this).attr('data-title').toLowerCase().indexOf(value) > -1)
//       });
//     });
//   });

/* Lightbox */

lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'showImageNumberLabel': false,
    'maxWidth': 750,
    'positionFromTop': 210,
    'wrapAround': true
    
})











