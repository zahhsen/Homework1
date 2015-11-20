$(document).ready(function() {
    $("#addButton").click(addItem);
    $("#removeButton").click(removeItem);
    $("#clearButton").click(clearItems);
    for (var key in localStorage) { //類似for each key
        addItemToDOM(key, localStorage[key]);
    }
});

function addItem(e) { //填入資料：事件（當按下addButton時）
    var key = $("#key").val();
    var value = $("#value").val();
    localStorage.setItem(key, value);
    addItemToDOM(key, localStorage[key]);
}

function addItemToDOM(key, value) { // 將新加入的localstorage的東西加到ul清單中
    $('#items').prepend($("<li></li>").attr("id", key));
    $("#" + key).prepend($("<span></span>").addClass("note").html(key + ";" + value));
}

function removeItem(e) { //填入資料：事件（當按下addButton時）
    var key = $("#key").val();
    localStorage.removeItem(key);
    removeItemFromDOM(key);
}

function removeItemFromDOM(key) {
    $("#" + key).remove();
}

function clearItems(e) {
    localStorage.clear(); //-o-會把所有其他應用程式的都清掉....
    $("#items>li").remove();
}
