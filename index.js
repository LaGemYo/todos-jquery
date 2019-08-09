import $ from "jquery";

// Import stylesheets
import './index.css';


$(document).ready(() => {
  //Check off specific todos by clicking
  $("ul").on('click', "li", function () {
    $(this).toggleClass('completed')
  });

  //Click on X to delete todos
  $("span").on('click', "li", function (e) {
    $(this).parent().fadeOut(500, function () {
      $(this).remove();
    });
    e.stopPropagation();
  });

  //Add new todos
  $("input[type='text']").on("keypress", function (e) {
    if (e.which === 13) {
      var todoText = $(this).val();
      $(this).val("");
      $('ul').append("<li>X<span> " + todoText + " </span></li>")
    }


  });







});






