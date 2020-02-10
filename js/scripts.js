/* Search Code */

// const attrData = $('a').attr('data-title');
// console.log(attrData);


const searchString = document.getElementById('search');

searchString.addEventListener('keyup', () => {
    const input = searchString.value.toLowerCase();
    const a = document.getElementsByTagName('a');
    // console.log(input);
    for (let i = 0; i < a.length; i += 1) {
        const attrData = a[i].getAttribute('data-title');
        if (attrData.indexOf(input) > -1) {
            a[i].style.display = "";
            } else {
            a[i].style.display = "none";
            }
        }
});

// function myFunction() {
//     // Declare variables
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById('myInput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName('li');
  
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//       a = li[i].getElementsByTagName("a")[0];
//       txtValue = a.textContent || a.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//       } else {
//         li[i].style.display = "none";
//       }
//     }
//   }

/* Lightbox Code */

lightbox.option({
    'alwaysShowNavOnTouchDevices': false,
    'showImageNumberLabel': false,
    'maxWidth': 750,
    'positionFromTop': 210,
    'wrapAround': true
    
})











