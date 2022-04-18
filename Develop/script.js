$(document).ready(function(){
    // displaying the current date with jquery method
    $("#currentDay").text(moment().format('MMMM Do YYYY'));
    // on click function save whatever you input into the field and time 
    $(".save").on("click", function(){
        // displays message to the user upon saving their event to notify them they successfully saved their event to localStorage
        $("#storeMessage").removeClass("hidden");
        // using this function to display the variables and then save it into the local storage 
        var text = $(this).siblings(".text").val();
        
        var time = $(this).parent().attr("id");
        // sets time and text to local storage
        localStorage.setItem(time, text);
    });

    // gets the text and time from localStorage and saves it so it doesnt go away after you hit refresh
    $("#09AM .text").val(localStorage.getItem("09AM"));
    $("#10AM .text").val(localStorage.getItem("10AM"));
    $("#11AM .text").val(localStorage.getItem("11AM"));
    $("#12PM .text").val(localStorage.getItem("12PM"));
    $("#01PM .text").val(localStorage.getItem("01PM"));
    $("#02PM .text").val(localStorage.getItem("02PM"));
    $("#03PM .text").val(localStorage.getItem("03PM"));
    $("#04PM .text").val(localStorage.getItem("04PM"));
    $("#05PM .text").val(localStorage.getItem("05PM"));

    // function to update the rows on colors each hour
    function updateTime() {
        // moment to update rows and check the time for current hour they are in
        var currentHour = moment().hour();
        // Jquery to select the class of row to change the color depending on what time it is
        $(".text").each(function(){
            var hour = parseInt($(this).attr("class"));

            if (hour < currentHour) {
                $(this).addClass("past");
            } else if (hour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }
updateTime();
})