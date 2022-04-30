window.onload = function () {
    const addtask = document.getElementById("add");
    const cleartask = document.getElementById("clear");
    const tasklist = document.getElementById("tasklist1");
    const displaytasks = document.getElementById("alltasks");
    loadstoragedata();
    
    addtask.onclick = function () {
        displaytasks.value += tasklist.value + "\n";
        localStorage.setItem(
            "id", displaytasks.value
        )
    }

    cleartask.onclick = function () {
        displaytasks.value = "";
    }

    function loadstoragedata() {
        const getstoragedata = localStorage.getItem("id");
        displaytasks.value = getstoragedata;
    }
}