// Slider
let color = {
  red: 0,
  green: 0,
  blue: 0
};

let background = {
  red: 255,
  green: 255,
  blue: 266
};

const changeProperty = function(property) {
  if (property == "color") {
    $(".text").css("color", `rgb(
      ${color.red},
      ${color.green},
      ${color.blue})`);
  } else {
    $(".text").css("background-color", `rgb(
      ${background.red},
      ${background.green},
      ${background.blue})`);
  }
};

$.each(["red", "green", "blue"], (index, value)=> {
  $(`.${value}`).slider({
    animate: "slow",
    range: "min",  
    values: 255,  
    min: 0,
    max: 255,
    slide: (event, ui) => {
      if ($(".color").hasClass("active")) {
        color[`${value}`] = ui.value;
        changeProperty("color");
      } else {
        background[`${value}`] = ui.value;
        changeProperty("background-color");
      }
    }
  });
  
});

$(".color").on("click", ()=> {
  $(".background").removeClass("active");
  $(".color").addClass("active");

  $.each(["red", "green", "blue"], (index, value) => {
    $(`.${value}`).slider("value", color[`${value}`]);
  });

});

$(".background").on("click", ()=> {
  $(".color").removeClass("active");
  $(".background").addClass("active");

  $.each(["red", "green", "blue"], (index, value) => {
    $(`.${value}`).slider("value", background[`${value}`]);
  });

});

// Buttons
$(".btn").button();