$(document).ready(
    function () {
        $("#view_button").click(getPicture);

    });

function getPicture() {
    const apiKey = 'tbpusrwsiGIYHf1XnwRIjWNsbnMYKLfSw3F1cFRG';
    const dateValue = $("#date").val();
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=` + `${dateValue}`;
    fetchData(url);
};

function showPicture(data) {
    $("#pic").attr("src", data.url);
};

function noPicture(error) {
    alert(error.responseText);
}

function showTitle(data) {
    $("#title").append(data.title);
}

function loadData(data) {
    showPicture(data);
    showTitle(data);
}

function fetchData(url) {
    fetch(url, {
            method: "Get"
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            loadData(data);
        })
}