/* Search Code */

const searchString = document.getElementById('search');
const a = document.getElementsByClassName('item');

searchString.addEventListener('keyup', () => {
    const input = searchString.value.toLowerCase();
    // console.log(input);
    for (let i = 0; i < a.length; i += 1) {
        const attrData = a[i].getAttribute('data-title');
        if (attrData.toLowerCase().indexOf(input) > -1) {
            a[i].style.display = "";
            } else {
            a[i].style.display = "none";
            }
    }
});

searchString.addEventListener('search', () => {
    if (event.target.value === '') {
      for (let i = 0; i < a.length; i += 1) {
        a[i].style.display = "";
      }
    }
  });

/* jQuery Search Code */

// $(document).ready(function(){
//     $("#search").on("keyup search", function() {
//       var value = $(this).val().toLowerCase();
//       $('.item').filter(function() {
//         $(this).toggle($(this).attr('data-title').toLowerCase().indexOf(value) > -1)
//       });
//     });
//   });

/* Lightbox Code */

lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'showImageNumberLabel': false,
    'maxWidth': 750,
    'positionFromTop': 210,
    'wrapAround': true
    
})











