// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


$(document).ready(function () {//to load 1)html & 2)css first.
    // to display current day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); // to use moment.js
    // to assign saveBtn click listener for user input and time stamp??
    $(".saveBtn").on("click", function () {
        //to get nearby values.
        console.log(this);
        var text = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id"); 

        //to set items in local storage.
        localStorage.setItem(time, text);
    })