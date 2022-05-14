$(document).ready(
    function () {
        $("#view_button").click(getPicture);
    });

function getPicture() {
    const url = "https://api.nasa.gov/planetary/apod";
    $.ajax({
        url: url,
        type: "GET",
        data: {
            api_key: "tbpusrwsiGIYHf1XnwRIjWNsbnMYKLfSw3F1cFRG",
            date: $("#date").val()
        },
        dataType: "json",
        "success": loadData,
        "error": noPicture
    });
    // fetch(url, {
    //     method: "GET",
    //     //withCredentials: true,
    //     //credentials: "include",
    //     headers: {
    //         'API-Key': "tbpusrwsiGIYHf1XnwRIjWNsbnMYKLfSw3F1cFRG",
    //         "Content-Type": "application/json"
    //     }

    // }).then((result) => {
    //     showPicture(result);
    // })
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