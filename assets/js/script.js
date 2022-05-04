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

  // get items from local storage
  // $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
  
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

