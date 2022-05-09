$(document).ready(function () {
    "use strict";
    const startButton = $("#start");
    const boundaryDiv = $(".boundary");
    const endButton = $("#end");
    const status = $("#status");
    const mainDiv = $("#maze");
    let isStarted = false;

    function resetDiv() {
        boundaryDiv.css('background-color', '#eeeeee');
        isStarted = false;
    }

    function endGame() {
        if (isStarted) {
            boundaryDiv.css('background-color', 'red');
            status.html("Game : Ended").css("color", "red");
            isStarted = false;
        }
    }

    boundaryDiv.mousemove(function (e) {
        endGame();
    })

    startButton.click(function () {
        resetDiv();
        isStarted = true;
        status.html("Game : Started......").css("color", "blue");
    })


    endButton.mousemove(function (e) {
        if (isStarted) {
            status.html("Game : Completed").css("color", "green");
            resetDiv();
        }
    })

    mainDiv.parent().mousemove(function (e) {
        var left = e.pageX < startButton.offset().left;
        var right = e.pageX > startButton.offset().right;
        if (left || right)
            endGame();
    })
});