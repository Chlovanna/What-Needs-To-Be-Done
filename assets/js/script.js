$(document).ready(function () {
  // to display current day & time.
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); // to use moment.js

  $(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //to set items in local storage.
    localStorage.setItem(time, text);
  });

  // save tasks to local storage
  for (let i = 9; i < 18; i++) {
    var saveTasks = localStorage.getItem(i);
    var timeInfo = $(`[id=${i}]`).children(".description");
    timeInfo.val(saveTasks);
  }

  function timeTracker() {
    //declare currenHour.
    var currentHour = moment().hour();

    // to loop over time blocks
    $(".time-block").each(function () {
      var workHour = parseInt($(this).attr("id").split("hour")[1]);

      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");

      if (workHour < currentHour) {
        $(this).addClass("past");
      } else if (workHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }
  timeTracker(); //call timeTracker
});

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
