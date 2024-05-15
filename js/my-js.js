// https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
function myFunction() {
   var x = document.getElementById("myDIV");
   if (x.style.display === "block") {
     x.style.display = "none"; //hidden element
   } else {
     x.style.display = "block"; //element appears
   }
 }



// function myFunction() {
//    var element = document.body;
//    element.classList.toggle("dark-mode");
// }
