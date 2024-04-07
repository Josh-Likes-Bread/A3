$(document).ready(function() {

  var eventDivs = $('.event');
  var currentIndex = 0;
  var isActive = false;
  var secondIndex = 1;
  var thirdIndex = 2;
  var fourthIndex = 3;

      $(document).on('mousemove', function(e) {


        var mouseX = e.pageX;
        var mouseY = e.pageY;

// -------------- this makes RM and LS move--------------------
//         // Get the position of the .LS element
//         var lsElement = $('.LS');
//         var lsX = lsElement.offset().left;
//         var lsY = lsElement.offset().top;
    
//         // Calculate the distance between the mouse X offset and the .LS element's X offset
//         var distanceX = Math.abs(mouseX - lsX);
//         var distanceY = Math.abs(mouseY - lsY);


// // ---------------------------------------------------------------------------------------------------
//         var newX = lsX -  (distanceX / 8);
//         var newY = lsY -  (distanceY / 8);


//         $(lsElement).css({
//           "top": newY/8 + "px",
//           "left": newX/8 + "px"
//         })



//         // --------------.RM ?????? WORKS (Kinda)--------------------
//         // Get the position of the .RM element
//         var rmElement = $('.RM');
//         var rmX = rmElement.offset().left;
//         var rmY = rmElement.offset().top;
    
//         // Calculate the distance between the mouse X offset and the .RM element's X offset
//         var rmdistanceX = Math.abs(mouseX - rmX);
//         var rmdistanceY = Math.abs(mouseY - rmY);

//         var newrmX = rmX +  (rmdistanceX / 8);
//         var newrmY = rmY +  (rmdistanceY / 8);


//         $(rmElement).css({
//           "top": newrmY/8 + "px",
//           "left": newrmX/8 + "px"
//         })

// -------------------------------this makes GD move-------------------------------------

        var gdElement = $('.GD');
        var gdX = gdElement.offset().left;
        var gdY = gdElement.offset().top;


        // Calculate the distance between the mouse and the middle of .GD element
        var gdXdistanceFromMiddle = Math.abs(mouseX - gdX) - gdElement.width()/2;
        var gdYdistanceFromMiddle = Math.abs(mouseY - gdY) -  gdElement.height()/2;

        var newgdX = gdX -  gdXdistanceFromMiddle;
        var newgdY = gdY -  gdYdistanceFromMiddle ;

        console.log("gd x distance",gdXdistanceFromMiddle)
        console.log("gd y distance",gdYdistanceFromMiddle)


        $('.GD').css({
          "top": newgdY/75 + "px",
          "left": newgdX/75 + "px",
        })




        
























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

  });



// ---------------------------------------------------------

            //----------asking chat to caluculate the distance between .RM div and mouse-------
      // var mouseX = e.pageX;
      // var mouseY = e.pageY;
  
      // // Get the position of the .RM element
      // var rmElement = $('.RM');
      // var rmElementX = rmElement.offset().left + rmElement.outerWidth() / 2;
      // var rmElementY = rmElement.offset().top + rmElement.outerHeight() / 2;
  
      // // Calculate the distance between the mouse and the .RM element
      // var rmdistance = Math.sqrt(Math.pow(mouseX - rmElementX, 2) + Math.pow(mouseY - rmElementY, 2));
  
  
      // // Log the distance
      // // console.log('Distance:', rmdistance);
  
      // // -----------------------------
        
      //       // Get the position of the .LM element
      //       var lsElement = $('.LS');
      //       var lsElementX = lsElement.offset().left + lsElement.outerWidth() / 2;
      //       var lsElementY = lsElement.offset().top + lsElement.outerHeight() / 2;
        
      //       // Calculate the distance between the mouse and the .RM element
      //       var lsdistance = Math.sqrt(Math.pow(mouseX - lsElementX, 2) + Math.pow(mouseY - lsElementY, 2));
        
        
      //       // Log the distance
      //       console.log('Distance:', lsdistance);
        
      //       // ----------------------------- test

      //       var lsX = lsElement.offset().left
      //       var lsY = lsElement.offset().top


      //       lsElement.css({
      //         "top": mouseX - lsdistance,
      //       })

            // ----------------------------


//         if (rmdistance < 400){
//           $('.RM').css({
//             "font-family": "RedactionReg",
//           })
//         }

//         if (rmdistance > 400){
//           $('.RM').css({
//             "font-family": "Redaction35",
//           })
//         }

//         if (rmdistance > 500){
//           $('.RM').css({
//             "font-family": "Redaction50",
//           })
//         }

//         if (rmdistance > 700){
//           $('.RM').css({
//             "font-family": "Redaction70",
//           })
//         }

//         if (rmdistance > 1000){
//           $('.RM').css({
//             "font-family": "Redaction",
//           })
//         }

// // ----------LS------------------------

//         if (lsdistance < 400){
//           $('.LS').css({
//             "font-family": "RedactionReg",
//           })
//         }

//         if (lsdistance > 400){
//           $('.LS').css({
//             "font-family": "Redaction35",
//           })
//         }

//         if (lsdistance > 500){
//           $('.LS').css({
//             "font-family": "Redaction50",
//           })
//         }

//         if (lsdistance > 700){
//           $('.LS').css({
//             "font-family": "Redaction70",
//           })
//         }

//         if (lsdistance > 1000){
//           $('.LS').css({
//             "font-family": "Redaction",
//           })
//         }

//kill switch-----------------------------------------------
  // $(window).resize(function() {
  //   console.log("Window resized!");
  //   var mediaQuery = window.matchMedia('(max-width: 1024px)');
  //   if (mediaQuery.matches) {
  //     console.log("Media query matches (max-width: 1024px)");

  //     return; // Stop further execution of the event handler

  //   } else {

      // console.log("Media query doesn't match (min-width: 721px)");
      // Continue with the rest of the event handler
// --------------------------------------------------------------------


//failsafe--------------------------------------------------------------


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


// extra-----------------------------------------------------------


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
















// ---------------------- extras----------------

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






//----------------------more extras---------------------

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


