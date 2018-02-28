


var queryArr = ["cat", "dog", "panda"]

createBtns()





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

// Submit Button Click
$("#subBtn").on("click", function (event) {
    event.preventDefault()
    var searchTerm = $("#search").val()
    console.log("Submit Pressed")
    queryArr.splice(0, 0, searchTerm)
    eraseBtns()
    createBtns()
})


// On query button click
$(".queryBtn").on("click", function (event) {
    event.preventDefault()
    eraseGifs()


    var apiKey = "MNhVzIgPRGBpvrTp4NUiu6Qy6AziD64G"
    var limit = 15
    var query = $(this).attr("data-query")
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=" + apiKey + "&limit=" + limit + ""

    console.log("query: " + query)

    // AJAX request
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response.data[0].images)




        
        // Create Giphs
        for (r = 0; r < 10; r++) {

            var img = $("<img src='" + response.data[r].images.fixed_height_still.url + "' class='gif border m-1'>")
            $(img).attr("data-still", response.data[r].images.fixed_height_still.url)
            $(img).attr("data-animate", response.data[r].images.fixed_height.url)
            $(img).attr("data-state", "still")
            $("#gifContainer").append(img)

        }

        // Gif On Click 
        $(".gif").on("click", function () {
            console.log("click")
            var state = $(this).attr("data-state")
            var dataStill = $(this).attr('data-still')
            var dataAnimate = $(this).attr('data-animate')

            if (state === 'still') {
                $(this).attr('src', dataAnimate)
                $(this).attr('data-state', 'animate')
            }
            else if (state === 'animate') {
                $(this).attr('src', dataStill)
                $(this).attr('data-state', 'still')
            }
        })
    })



})

