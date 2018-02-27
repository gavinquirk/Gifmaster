


var queryArr = ["cat", "dog", "panda"]


createBtns()



// Submit Button Click
$("#subBtn").on("click", function () {
    var searchTerm = $("#search").val()
    console.log("Submit Pressed")
    queryArr.splice(0, 0, searchTerm)
    eraseBtns()
    createBtns()
})

// Function: create buttons based on query array
function createBtns() {
    for (i = 0; i < queryArr.length; i++) {
        var newBtn = $("<button id='button-" + i + "' class='queryBtn m-2' data-query=" + queryArr[i] + ">" + queryArr[i] + "</button>")
        $("#btnCon").append(newBtn)
    }
}

// Function: erase button container
function eraseBtns() {
    $("#btnCon").empty()
}

// Function: erase gif container
function eraseGifs() {
    $("#gifContainer").empty()
}



// On query button click
$(".queryBtn").on("click", function (event) {
    event.preventDefault()
    console.log(queryArr)
    eraseGifs()
    var apiKey = "MNhVzIgPRGBpvrTp4NUiu6Qy6AziD64G"
    var limit = 15
    query = $(this).attr("data-query")
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=" + apiKey + "&limit=" + limit + ""

    // AJAX
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {


        
        // Create Gifs
        for (r = 0; r < 10; r++) {
            var img = $("<img src='" + response.data[r].images.fixed_height.url + "' class='border m-1'>")
            $("#gifContainer").append(img)
        }
    })



})