$(document).ready(function() {

  var eventDivs = $('.event');
  var eventP = $(p);
  var currentIndex = 0;
  var isActive = false;

  $(document).on('mousemove', function(e) {
    if (!isActive) {
      var $currentEventDiv = $(eventDivs[currentIndex]);
      var $currentP = $(eventP[currentIndex]);
      var leftPos = e.pageX - ($currentEventDiv.outerWidth() / 2);
      var topPos = e.pageY - ($currentEventDiv.outerHeight() / 2);

      $currentEventDiv.css({
        "top": topPos + "px",
        "left": leftPos + "px",
        "z-index": 9999,
        "font-family": "RedactionReg",
        "font-size": "8pt",
        "line-height": "12pt",
        "text-decoration": "none",
      });

      $currentP.css({
        "filter": "blur(0px) !important",
      })



      currentIndex = (currentIndex + 1) % eventDivs.length;
      isActive = true;
    }
  });

  $('.event').on('mouseleave', function() {
    isActive = false;

    $('.event').css({
      "z-index":1,
      "font-size": "8pt",
      "font-family":"Redaction",
      "line-height": "15pt",
      "text-decoration": "line-through",
    })

    $('p').css({
      "filter": "blur(2px)"
    })
  });
});




// $(document).ready(function() {
//   // Array to store all event divs
//   var eventDivs = [];
  
//   // Select all divs with class 'event' and push them into the array
//   $('.event').each(function() {
//     eventDivs.push($(this));
//   });
  
//   // Initialize index to track the current event div
//   var currentIndex = 0;

//   $(document).on('mousemove', function(e) {
//     // Get the current event div to move
//     var $currentEventDiv = eventDivs[currentIndex];
    
//     // Calculate the position to center the div relative to the mouse pointer
//     var leftPos = e.pageX - ($currentEventDiv.outerWidth() / 2);
//     var topPos = e.pageY - ($currentEventDiv.outerHeight() / 2);
    
//     // Apply the new position to the div
//     $currentEventDiv.css({
//       "top": topPos + "px",
//       "left": leftPos + "px"
//     });
//   });

//   // Cycle through the event divs
//   setInterval(function() {
//     // Increment index and reset if it exceeds the array length
//     currentIndex = (currentIndex + 1) % eventDivs.length;
//   }, 3000); // Change the time interval as needed
// });
















// ---------------------- memes----------------

// $(document).ready(function() {
//   $(document).on('mousemove', function(e) {

//     var $anther = $("#anther_kiley");

//     if (!$('#speakers').is(':hover')) {

//       var leftPos = e.pageX - ($anther.outerWidth() / 2);
//       var topPos = e.pageY - ($anther.outerHeight() / 2);

//       $anther.css({
//         "top": leftPos + "px",
//         "left": topPos + "px"
        
//       });
//     }
//   });
// });






//----------------------more memes---------------------

// $(document).ready(function() {
//   var eventDivs = [];

//   $('.event').each(function() {
//     eventDivs.push($(this));
//   });

//   var currentIndex = 0;

//   $(document).on('mousemove', function(e) {
//     var $currentEventDiv = eventDivs[currentIndex];

//     var leftPos = e.pageX - ($currentEventDiv.outerWidth() / 2);
//     var topPos = e.pageY - ($currentEventDiv.outerHeight() / 2);

//     $currentEventDiv.css({
//       "top": topPos + "px",
//       "left": leftPos + "px"
//     });


//     currentIndex = (currentIndex + 1) % eventDivs.length;
//   });
// });


