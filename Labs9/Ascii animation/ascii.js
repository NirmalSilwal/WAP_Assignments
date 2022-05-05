$(document).ready(function () {
    const startButton = $("#start");
    const stopButton = $("#stop");
    const animation = $("#animation");
    const size = $("#size");
    const speed = $("#speed");
    const textArea = $("#mytextarea");
    let currentValueInTestBox = "";
    let startInterval = "";
    const blank = BLANK;
    const exercise = EXERCISE;
    const juggler = JUGGLER;
    const bike = BIKE;
    const dive = DIVE;
    const custom = CUSTOM;
    let selectedAnimation = blank;
    let turboSpeed = 250;

    function disabledStartButton(isDisabled) {
        startButton.prop("disabled", isDisabled);
        animation.prop("disabled", isDisabled);
        size.prop("disabled", isDisabled);
        speed.prop("disabled", isDisabled);
    }
    function disabledStopButton(isDisabled) {
        stopButton.prop("disabled", isDisabled);
    }

    function onLoad() {
        disabledStopButton(true);
    }

    startButton.click(function () {
        currentValueInTestBox = textArea.val();
        textArea.val('');
        changeAnimation();
        startAnimation();
        disabledStartButton(true);
        disabledStopButton(false);
    })

    stopButton.click(function () {
        textArea.val(currentValueInTestBox);
        disabledStopButton(true);
        disabledStartButton(false)
        clearInterval(startInterval);
    })

    function startAnimation() {
        let textAreaSplitedValue = selectedAnimation.split("=====\n");
        let counter = textAreaSplitedValue.length - 1;
        startInterval = setInterval(function () {
            textArea.val(textAreaSplitedValue[counter]);
            counter++;
            if (counter === textAreaSplitedValue.length) {
                counter = 0;
            }
        }, turboSpeed);
    }

    function changeAnimation() {
        const selectedValue = animation.find(":selected").val();
        switch (selectedValue) {
            case 'blank':
                // textArea.val(blank);
                selectedAnimation = blank;
                break;
            case 'exercise':
                // textArea.val(exercise);
                selectedAnimation = exercise;
                break;
            case 'juggler':
                // textArea.val(juggler);
                selectedAnimation = juggler;
                break;
            case 'bike':
                // textArea.val(bike);
                selectedAnimation = bike;
                break;
            case 'dive':
                // textArea.val(dive);
                selectedAnimation = dive;
                break;
            case 'custom':
                // textArea.val(custom);
                selectedAnimation = custom;
                break;
        }
    }

    animation.change(function () {
        //  changeAnimation();
    });

    function changeSize() {
        const selectedSize = size.find(":selected").val();
        let fontSize = "12pt";
        switch (selectedSize) {
            case 'large':
                fontSize = "16pt";
                break;
            case 'small':
                fontSize = "10pt";
                break;
            case 'extraLarge':
                fontSize = "24pt";
                break;
            case 'xxl':
                fontSize = "32pt";
                break;
            case 'tiny':
                fontSize = "7pt";
                break;
        }
        textArea.css("font-size", fontSize);
    }
    size.change(function () {
        changeSize();
    })

    function speedTurbo(isChecked) {
        if (isChecked)
            turboSpeed = 50;
        else
            turboSpeed = 250;
    }
    speed.click(function () {
        const getCheckedStatus = $(this).prop('checked');
        speedTurbo(getCheckedStatus);
    })
    changeAnimation();
    changeSize();
    onLoad();
})