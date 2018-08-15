$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();

    var yearInput = parseInt($("input#textInput").val());

    var result = leapYear(yearInput);

    if (!result) {
      $(".not").hide();
      $(".year").text(yearInput);
      $(".not").show();
    } else {
      $(".not").hide();
      $(".year").text(yearInput);
    }

  });
});



// Back-end logic

var leapYear = function (number) {

  if (( number % 4 === 0) && ( number % 100 !== 0) || ( number % 400 === 0 )) {
    return true;
  } else {
  return false;
  }
}
