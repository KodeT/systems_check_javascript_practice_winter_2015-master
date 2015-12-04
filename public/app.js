$(document).ready(function() {
  $("form").on("submit", function(event){
    event.preventDefault();
    var description= $("#dream_description").val();
    debugger;
    if (description) {
      submitDescriptionViaAjax(description);
    } else {
      alert("stop that!");
    }
  });
});

var submitDescriptionViaAjax = function(description) {
  var request = $.ajax({
    method: "POST",
    url: "/dreams",
    data: { description: description }
  });

  request.done(function(responseData) {
    $("ul").append("<li>" + description + "</li>");
  });
}
