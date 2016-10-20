$(document).ready(function() {

  $("form").submit(function(event) {
    var wageInput = parseInt($("#wage").val());
    var appleInput = parseInt($("#apple").val());
    var mjInput = parseInt($("#mj").val());
    var result = wageInput + appleInput + mjInput;

    if (result < 4) {
      $("#output").text("You are a Conservative");
    } else if (result > 3 && result < 6) {
      $("#output").text("You tend to be Moderate");
    } else if (result >= 6) {
      $("#output").text("You belong in Portland");
    }

    event.preventDefault();

  });

});
