// Check state
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

// Remove element
$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(function () {
      $(this).remove;
    });
  event.stopPropagation();
});

// Input keypress

$("input").keypress(function (event) {
  if (event.which === 13) {
    // grabbing text from input
    let toDoText = $(this).val();
    // refresh input value
    $(this).val("");
    // create li with input text
    $("ul").append(
      "<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>" +
        toDoText +
        "</li>"
    );
  }
});

// Toggle plus sign
$(".fa-plus-circle").click(function () {
  $("input").fadeToggle();
});
