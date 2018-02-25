

var query = "placeholder"
var apiKey = "MNhVzIgPRGBpvrTp4NUiu6Qy6AziD64G"
var limit = 5
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=" + apiKey + "&limit=" + limit + ""
var queryArr = ["cat", "dog", "panda"]


createBtns()

// Submit Button Click
$("#subBtn").on("click", function () {
    console.log("Submit Pressed")
    console.log(queryArr)
    queryArr.splice(0, 0, query)
    console.log(queryArr)
    eraseBtns()
    createBtns()

})


// Create buttons based on query array
function createBtns() {
    for (i = 0; i < queryArr.length; i++) {
        var newBtn = $("<button id='button-" + i + "' class='m-2' data-query=" + query + ">" + queryArr[i] + "</button>")
        $("#btnCon").append(newBtn)
    }
}

// Erase buttons in container
function eraseBtns() {
    $("#btnCon").empty()
}



// AJAX
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

    console.log(response)

    var img = $("<img src='"+response.data[0].images.fixed_height.url+"' class='border m-1'>")
    $("#gifContainer").append(img)


})