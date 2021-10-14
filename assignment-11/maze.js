isStarted = false;

function start() {
    isStarted = true;
    $("#status").text("Game started. Dont touch the border.");
    $("#status").css({
        color: "blue"
    });
}

function end() {
    if (!isStarted) return;

    isStarted = false;
    $("#status").text("Congratulations, you won.");
    $("#status").css({
        color: "green"
    });
}

function lose() {
    if (!isStarted) return;

    isStarted = false;
    $("#status").text("Sorry, you lose.");
    $("#status").css({
        color: "gray"
    });
}

$(()=>{
    $("#start").on('click', start);
    $("#end").on('mouseenter', end);
    $('.boundary').hover(lose)
    $('#maze').mouseleave(lose)
});