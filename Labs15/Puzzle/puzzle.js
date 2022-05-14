var xValue = 300;
var yValue = 300;

$(document).ready(function () {
    loadData();
    $("#puzzlearea div").each(function () {
        $(this).click(function () {
            if (isDragable(this)) {
                let xTempo = parseInt($(this).attr("x"));
                let yTempo = parseInt($(this).attr("y"));
                setPuzzlePiece(this, xValue, yValue);
                xValue = xTempo;
                yValue = yTempo;
            }
        });

        $(this)
            .mouseover(function () {
                var b = isDragable(this);
                if (b) {
                    $(this).addClass("movablepiece");
                }
            })
            .mouseout(function () {
                $(this).removeClass("movablepiece");
            });
    });

    $("#shufflebutton").click(function () {
        for (let i = 0; i < 200; i++) {
            let xRandom = Math.floor(Math.random() * 4);
            let yRandom = Math.floor(Math.random() * 4);
            xRandom *= 100;
            yRandom *= 100;
            $("#puzzlearea div").each(function () {
                let xTempo = parseInt($(this).attr("x"));
                let yTempo = parseInt($(this).attr("y"));
                if (xTempo === xRandom && yTempo === yRandom) {
                    setPuzzlePiece(this, xValue, yValue);
                    xValue = xTempo;
                    yValue = yTempo;
                }
            });
        }
    });
});

function loadData() {
    $("#puzzlearea div").each(function (i) {
        var x = (i % 4) * 100;
        var y = Math.floor(i / 4) * 100;
        setPuzzlePiece(this, x, y);
        $(this).css({
            backgroundPosition: -x + "px " + -y + "px",
        });
    });
}

function setPuzzlePiece(obj, x, y) {
    $(obj).addClass("puzzlepiece");
    $(obj).css({
        left: x + "px",
        top: y + "px",
    });

    $(obj).attr("x", x);
    $(obj).attr("y", y);
}

function isDragable(obj) {
    let xTempo = parseInt($(obj).attr("x"));
    let yTempo = parseInt($(obj).attr("y"));
    let left = moveLeft(xTempo, yTempo);
    let right = moveRight(xTempo, yTempo);
    let top = moveTop(xTempo, yTempo);
    let down = getDown(xTempo, yTempo);
    return (
        (left !== null && isEmpty(left[0], left[1])) ||
        (right !== null && isEmpty(right[0], right[1])) ||
        (top !== null && isEmpty(top[0], top[1])) ||
        (down !== null && isEmpty(down[0], down[1]))
    );
}

const ONE_HUNDRED = 100;
const THREE_HUNDRED = 300;

function moveLeft(x, y) {
    let rs = x - ONE_HUNDRED;
    let rsArry = new Array();
    if (rs >= 0) {
        rsArry[0] = rs;
        rsArry[1] = y;
        return rsArry;
    } else {
        return null;
    }
}

function moveRight(x, y) {
    let rs = x + ONE_HUNDRED;
    let rsArry = new Array();
    if (rs <= THREE_HUNDRED) {
        rsArry[0] = rs;
        rsArry[1] = y;
        return rsArry;
    } else {
        return null;
    }
}

function moveTop(x, y) {
    let rs = y - ONE_HUNDRED;
    let rsArry = new Array();
    if (rs >= 0) {
        rsArry[0] = x;
        rsArry[1] = rs;
        return rsArry;
    } else {
        return null;
    }
}

function getDown(x, y) {
    let rs = y + ONE_HUNDRED;
    let rsArry = new Array();
    if (rs <= THREE_HUNDRED) {
        rsArry[0] = x;
        rsArry[1] = rs;
        return rsArry;
    } else {
        return null;
    }
}

function isEmpty(x, y) {
    return x === xValue && y === yValue;
}

function getRandom(num) {
    for (let i = 0; i < 1000; i++) {
        let r = Math.floor(Math.random() * arrayObj.length);
    }
}