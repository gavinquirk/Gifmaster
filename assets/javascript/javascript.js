$(document).ready(function () {
    
    var queryArr = ["cat", "dog", "panda"]

    createBtns()

    // Function: create buttons based on query array
    function createBtns() {
        for (i = 0; i < queryArr.length; i++) {
            var newBtn = $("<button type='button' class='queryBtn m-2 btn-md btn' data-query=" + queryArr[i] + ">" + queryArr[i] + "</button>")
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
        queryArr.splice(0, 0, searchTerm)
        eraseBtns()
        createBtns()
    })


    // On query button click
    $(document).on("click", ".queryBtn", function (event) {
        event.preventDefault()
        eraseGifs()

        var apiKey = "MNhVzIgPRGBpvrTp4NUiu6Qy6AziD64G"
        var limit = 10
        var query = $(this).attr("data-query")
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=" + apiKey + "&limit=" + limit + ""

        // AJAX request
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // Render Giphs
            for (r = 0; r < 10; r++) {
                var rating = response.data[r].rating
                var imgCont = $("<div class='imgCont'>")
                var img = $("<img src='" + response.data[r].images.fixed_height_still.url + "' class='gif border m-1'>")
                $(img).attr("data-still", response.data[r].images.fixed_height_still.url)
                $(img).attr("data-animate", response.data[r].images.fixed_height.url)
                $(img).attr("data-state", "still")
                $(img).attr("title", "Rating: " + rating)
                $("#gifContainer").append(img)

            }

            // Gif On Click Animation Toggle
            $(".gif").on("click", function () {
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
})

