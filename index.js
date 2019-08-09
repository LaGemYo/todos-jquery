import $ from "jquery";

// Import stylesheets
import './index.css';

//Check off specific to-do's by clicking
$(document).ready(() => {

  $("li").on('click', function() {
    $(this).toggleClass('completed')
  });

//Click on X to delete to-document
$("span").on('click', function(e) {
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  e.stopPropagation();
});








});






