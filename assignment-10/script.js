let amount = 10
let interval = null

const genrateColor = () => {
  return "#" + ((1<<24)*Math.random() | 0).toString(16);
};

const genratePosition = () => {
  return Math.floor(Math.random() * 100);
};

const createElement = (width) => {
  const color = genrateColor();
  let elm = `
    <div class="circle-class" style="
    background-color:${color}; 
    width:${width}px; 
    height:${width}px; 
    left:${genratePosition()}vw; 
    top:${genratePosition()}vh;"></div>`;
  return elm;
};

const createCircles = (width, rate, numbers) => {
  for (let i = 0; i < numbers; i++) {
    const elm = createElement(width);
    $("#container").append(elm);
  }

  interval = setInterval(() => {
    $(".circle-class").each(function () {
      const new_width = parseInt($(this).css("width")) + parseInt(amount);
      $(this).css("width", new_width);
      $(this).css("height", new_width);
      // remove the circle when the circle clicked
      $(this).click(function () {$(this).remove();});
    });
  }, rate);
};

$(document).ready(() => {
  $("#start").click((e) => {
    $("#container").empty();
    clearInterval(interval);
    amount = $("#amount").val();
    createCircles(
      $("#width").val(),
      $("#rate").val(),
      $("#circles").val(),
    );
  });
});

