import $ from "jquery";

// Import stylesheets
import './index.css';

$(document).ready(() => {
  //Check off specific todos by clicking
  $("ul").on('click', "li", function () {
    $(this).toggleClass('completed')
  });

  //Click on trash to delete todos
  $(document).on('click', "span", function (e) {
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
      $('ul').append("<li><span> <i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
  });

  //Show input add todos when pressing "+"icon
  $(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
  })
});






