import $ from "jquery";

// Import stylesheets
import './index.css';

//Check off specific to-do's by clicking
$(document).ready(() => {

  $("li").on('click', function () {
    $(this).toggleClass('completed')
  });
});


















