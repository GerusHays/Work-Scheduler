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
    $("#13PM .text").val(localStorage.getItem("13PM"));
    $("#14PM .text").val(localStorage.getItem("14PM"));
    $("#15PM .text").val(localStorage.getItem("15PM"));
    $("#16PM .text").val(localStorage.getItem("16PM"));
    $("#17PM .text").val(localStorage.getItem("17PM"));

    // function to update the rows on colors each hour
    function updateTime() {
        // moment to update rows and check the time for current hour they are in 
        // i received the momemnt.hour function from google
        var currentHour = moment().hour();
        // console.log("hours is: ", currentHour); 
        // Jquery to select the class of row to change the color depending on what time it is
        // i utilized row over the text since the time was called in the row throughout my code 
        $(".row").each(function(){
            // calling variable to to see the ID which is a number to check the current hour time
            var hour = parseInt($(this).attr("id"));
            // console.log(hour);
            // if the hour the function is seeing is less than the current hour it will display the past class
            if (hour < currentHour) {
                $(this).addClass("past");
                // if hour = current hour then it will display the present class
            } else if (hour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                // if the current hour isnt equal to or less than it will be in the future and will display the future class
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }
    // calls the function to actually display the colors
updateTime();
})