

var query
var apiKey = "MNhVzIgPRGBpvrTp4NUiu6Qy6AziD64G"
var limit = 5
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=" + apiKey + "&limit=" + limit + ""
var queryArr = ["cat", "dog", "panda"]



createBtns()



// Submit Button Click
$("#subBtn").on("click", function () {
    var searchTerm = $("#search").val()
    console.log("Submit Pressed")
    queryArr.splice(0, 0, searchTerm)
    console.log(queryArr)
    eraseBtns()
    createBtns()
})

// Create buttons based on query array
function createBtns() {
    for (i = 0; i < queryArr.length; i++) {
        var newBtn = $("<button id='button-" + i + "' class='queryBtn m-2' data-query=" + queryArr[i] + ">" + queryArr[i] + "</button>")
        $("#btnCon").append(newBtn)
    }
}

// Erase buttons in container
function eraseBtns() {
    $("#btnCon").empty()
}

    // On query button click
    $(".queryBtn").on("click", function() {
        query = $(this).attr("data-query")
        console.log(query)
    })



// AJAX
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

    console.log(response)



    // Temporary AJAX img request
    // var img = $("<img src='" + response.data[i].images.fixed_height.url + "' class='border m-1'>")
    // $("#gifContainer").append(img)




})