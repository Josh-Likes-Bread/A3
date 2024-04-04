$(document).ready(function() {

  var eventDivs = $('.event');
  var currentIndex = 0;
  var isActive = false;
  var secondIndex = 1;
  var thirdIndex = 2;
  var fourthIndex = 3;

  var mediaQuery = window.matchMedia('(max-width: 1024px)');
    if (mediaQuery.matches) {
      console.log("Media query matches (max-width: 1024px)");

      return; // Stop further execution of the event handler

    } else {

      console.log("Media query doesn't match (min-width: 721px)");
      // Continue with the rest of the event handler

      $(document).on('mousemove', function(e) {
        if (!isActive) {
          var $currentEventDiv = $(eventDivs[currentIndex]);
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
            // "height": "30vh",
            // "width": "35em"
          });
    
          //making the divs go back to their original size on mouseleave//
    
          $('#anther_kiley').css({
            'height': '26vh'
          })
    
          $('#takahashi_kuan').css({
            'height': '32vh'
          })
    
          $('#e_roon_kang').css({
            'height': '32vh'
          })
    
          $('#sebastian_aubin').css({
            'height': '28vh'
          })
    
          $(eventDivs[currentIndex]).css({
            // "background-color": "black",
            "transform":"scale(1)",
            "cursor": "nesw-resize"
          });
          
          $(eventDivs[secondIndex]).css({
            // "background-color": "blue",
            "transform":"scale(0.65)",
            "cursor": "nesw-resize"
          });
    
          $(eventDivs[thirdIndex]).css({
            // "background-color": "red",
            "transform":"scale(0.75)",
            "cursor": "nesw-resize"
          });
    
          $(eventDivs[fourthIndex]).css({
            // "background-color": "green",
            "transform":"scale(0.85)",
          });
    
          currentIndex = (currentIndex + 1) % eventDivs.length;
          secondIndex = (secondIndex + 1) % eventDivs.length;
          thirdIndex = (thirdIndex + 1) % eventDivs.length;
          fourthIndex = (fourthIndex + 1) % eventDivs.length;
          isActive = true;
        }
      });
    
      
    
      $('.event').on('mouseleave', function() {
        isActive = false;
    
        $('.event').css({
          "z-index": 1,
        });
    
    
    //chatterino-----------
    
        // Reset button color to default
        $(this).find('.myButton').css({
          'color': '' // Reset color to default (remove inline style)
        });
    
      $(this).animate({ scrollTop: 0 }, 'fast'); // Adjust speed as needed
    });
    
    //-----------------------------------------------------------------------
    
    
      $('.event').on('click', function() {
    
        $(eventDivs[fourthIndex]).css({
          'height': 'auto'
        });
    
        $("section:hover").css({
          "cursor": "pointer"
        })
    
    //Ali with the assist---------------------------
    
        var expandingDiv = $(eventDivs[fourthIndex])
        var bodyWidth = $('body').width();
        var bodyHeight = $('body').height();
        var expandingDivOffset = {
              "top":expandingDiv.offset().top,
              "bottom":expandingDiv.offset().top + expandingDiv.height(),
              "left":expandingDiv.offset().left,
              "right":expandingDiv.offset().left + expandingDiv.width()
            }
    
            console.log(expandingDivOffset)
          
        
        if (expandingDivOffset.left < 0 ){
          expandingDiv.css({ 
            "left": "0px"
           })
        }
    
        if (expandingDivOffset.right > bodyWidth){
          expandingDiv.css({ 
            "left": "auto",
            "right":"0px"
           })
        }
    
        if (expandingDivOffset.top < 0){
          expandingDiv.css({ 
            "top":"0px"
           })
        }
    
        if (expandingDivOffset.bottom > bodyHeight){
          expandingDiv.css({ 
            "top":"auto",
            "bottom": "0px"
          })
        }
    
      });
    }

  $(window).resize(function() {
    console.log("Window resized!");
    var mediaQuery = window.matchMedia('(max-width: 1024px)');
    if (mediaQuery.matches) {
      console.log("Media query matches (max-width: 1024px)");

      return; // Stop further execution of the event handler

    } else {

      console.log("Media query doesn't match (min-width: 721px)");
      // Continue with the rest of the event handler

      $(document).on('mousemove', function(e) {
        if (!isActive) {
          var $currentEventDiv = $(eventDivs[currentIndex]);
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
            // "height": "30vh",
            // "width": "35em"
          });
    
          //making the divs go back to their original size on mouseleave//
    
          $('#anther_kiley').css({
            'height': '26vh'
          })
    
          $('#takahashi_kuan').css({
            'height': '32vh'
          })
    
          $('#e_roon_kang').css({
            'height': '32vh'
          })
    
          $('#sebastian_aubin').css({
            'height': '28vh'
          })
    
          $(eventDivs[currentIndex]).css({
            // "background-color": "black",
            "transform":"scale(1)",
            "cursor": "nesw-resize"
          });
          
          $(eventDivs[secondIndex]).css({
            // "background-color": "blue",
            "transform":"scale(0.65)",
            "cursor": "nesw-resize"
          });
    
          $(eventDivs[thirdIndex]).css({
            // "background-color": "red",
            "transform":"scale(0.75)",
            "cursor": "nesw-resize"
          });
    
          $(eventDivs[fourthIndex]).css({
            // "background-color": "green",
            "transform":"scale(0.85)",
          });
    
          currentIndex = (currentIndex + 1) % eventDivs.length;
          secondIndex = (secondIndex + 1) % eventDivs.length;
          thirdIndex = (thirdIndex + 1) % eventDivs.length;
          fourthIndex = (fourthIndex + 1) % eventDivs.length;
          isActive = true;
        }
      });
    
      
    
      $('.event').on('mouseleave', function() {
        isActive = false;
    
        $('.event').css({
          "z-index": 1,
        });
    
    
    //chatterino-----------
    
        // Reset button color to default
        $(this).find('.myButton').css({
          'color': '' // Reset color to default (remove inline style)
        });
    
      $(this).animate({ scrollTop: 0 }, 'fast'); // Adjust speed as needed
    });
    
    //-----------------------------------------------------------------------
    
    
      $('.event').on('click', function() {
    
        $(eventDivs[fourthIndex]).css({
          'height': 'auto'
        });
    
        $("section:hover").css({
          "cursor": "pointer"
        })
    
    //Ali with the assist---------------------------
    
        var expandingDiv = $(eventDivs[fourthIndex])
        var bodyWidth = $('body').width();
        var bodyHeight = $('body').height();
        var expandingDivOffset = {
              "top":expandingDiv.offset().top,
              "bottom":expandingDiv.offset().top + expandingDiv.height(),
              "left":expandingDiv.offset().left,
              "right":expandingDiv.offset().left + expandingDiv.width()
            }
    
            console.log(expandingDivOffset)
          
        
        if (expandingDivOffset.left < 0 ){
          expandingDiv.css({ 
            "left": "0px"
           })
        }
    
        if (expandingDivOffset.right > bodyWidth){
          expandingDiv.css({ 
            "left": "auto",
            "right":"0px"
           })
        }
    
        if (expandingDivOffset.top < 0){
          expandingDiv.css({ 
            "top":"0px"
           })
        }
    
        if (expandingDivOffset.bottom > bodyHeight){
          expandingDiv.css({ 
            "top":"auto",
            "bottom": "0px"
          })
        }
    
      });
    }
  });

});


//failsafe


// $(document).ready(function() {

//   var eventDivs = $('.event');
//   var currentIndex = 0;
//   var isActive = false;
//   var secondIndex = 1
//   var thirdIndex = 2
//   var fourthIndex = 3

//   $(document).on('mousemove', function(e) {
//     if (!isActive) {
//       var $currentEventDiv = $(eventDivs[currentIndex]);
//       var leftPos = e.pageX - ($currentEventDiv.outerWidth() / 2);
//       var topPos = e.pageY - ($currentEventDiv.outerHeight() / 2);


//       $currentEventDiv.css({
//         "top": topPos + "px",
//         "left": leftPos + "px",
//         "z-index": 9999,
//         "font-family": "RedactionReg",
//         "font-size": "8pt",
//         "line-height": "12pt",
//         "text-decoration": "none",
//         "height": "30vh",
//         "width": "35em"
//       });

//       $(eventDivs[currentIndex]).css({
//         // "background-color": "black",
//         "transform":"scale(1)",
//         "height": "30vh",
//         "width": "35em"
//       });
      
//       $(eventDivs[secondIndex]).css({
//         // "background-color": "blue",
//         "transform":"scale(0.65)",
//         "height": "30vh",
//         "width": "35em"
//       });

//       $(eventDivs[thirdIndex]).css({
//         // "background-color": "red",
//         "transform":"scale(0.75)",
//         "height": "30vh",
//         "width": "35em"
//       });

//       $(eventDivs[fourthIndex]).css({
//         // "background-color": "green",
//         "transform":"scale(0.85)",
//         "height": "30vh",
//         "width": "35em"
//       });

//       currentIndex = (currentIndex + 1) % eventDivs.length;
//       secondIndex = (secondIndex + 1) % eventDivs.length;
//       thirdIndex = (thirdIndex + 1) % eventDivs.length;
//       fourthIndex = (fourthIndex + 1) % eventDivs.length;
//       isActive = true;
//     }
//   });

  

//   $('.event').on('mouseleave', function() {
//     isActive = false;

//     $('.event').css({
//       "z-index": 1,
//     });

//     // Reset button color to default
//     $(this).find('.myButton').css({
//       'color': '' // Reset color to default (remove inline style)
//     });

//   $(this).animate({ scrollTop: 0 }, 'fast'); // Adjust speed as needed
// });

//   $('.event').on('click', function() {
//     // Find the button within the clicked div and change its color to blue
//     $(this).find('.myButton').css({
//       'color': 'blue'
//     });

//     $(eventDivs[fourthIndex]).css({
//       // "background-color": "black",
//       // 'width': '50vw',
//       'height': '80vh'
//     });

//   });

// });


// extra memes


// $('.event').on('click', function() {
//   // Find the button within the clicked div and change its color to blue
//   $(this).find('.myButton').css({
//     'color': 'blue'
//   });
// });



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


