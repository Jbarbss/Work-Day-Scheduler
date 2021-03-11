// shows the current date and current time with seconds for the header
var updateTime = function () {
  var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss A");
  $("#currentDay").text(currentDate);
};
setInterval(updateTime, 1000);
// current date and time
const timeOfDay = moment().hours();

$(document).ready(function () {
  timeColor();

  // stores user input in local storage for each time block when save button is clicked
  $(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
  });

  // retrieves user input from local storage
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour1 .description").val(localStorage.getItem("hour1"));
  $("#hour2 .description").val(localStorage.getItem("hour2"));
  $("#hour3 .description").val(localStorage.getItem("hour3"));
  $("#hour4 .description").val(localStorage.getItem("hour4"));
  $("#hour5 .description").val(localStorage.getItem("hour5"));
});

// function changes color based on the time of day, green is future, grey is past and red is present
function timeColor() {
  if (timeOfDay > 8) {
    $("#hour8").addClass("past");
  } else if (timeOfDay >= 8 && timeOfDay < 9) {
    $("#hour8").addClass("present");
  } else if (timeOfDay < 8) {
    $("#hour8").addClass("future");
  }

  if (timeOfDay > 9) {
    $("#hour9").addClass("past");
  } else if (timeOfDay >= 9 && timeOfDay < 10) {
    $("#hour9").addClass("present");
  } else if (timeOfDay < 9) {
    $("#hour9").addClass("future");
  }

  if (timeOfDay > 10) {
    $("#hour10").addClass("past");
  } else if (timeOfDay >= 10 && timeOfDay < 11) {
    $("#hour10").addClass("present");
  } else if (timeOfDay < 10) {
    $("#hour10").addClass("future");
  }

  if (timeOfDay > 11) {
    $("#hour11").addClass("past");
  } else if (timeOfDay >= 11 && timeOfDay < 12) {
    $("#hour11").addClass("present");
  } else if (timeOfDay < 11) {
    $("#hour11").addClass("future");
  }

  if (timeOfDay > 12) {
    $("#hour12").addClass("past");
  } else if (timeOfDay >= 12 && timeOfDay < 13) {
    $("#hour12").addClass("present");
  } else if (timeOfDay < 12) {
    $("#hour12").addClass("future");
  }

  if (timeOfDay > 13) {
    $("#hour1").addClass("past");
  } else if (timeOfDay >= 13 && timeOfDay < 14) {
    $("#hour1").addClass("present");
  } else if (timeOfDay < 13) {
    $("#hour1").addClass("future");
  }

  if (timeOfDay > 14) {
    $("#hour2").addClass("past");
  } else if (timeOfDay >= 14 && timeOfDay < 15) {
    $("#hour2").addClass("present");
  } else if (timeOfDay < 14) {
    $("#hour2").addClass("future");
  }

  if (timeOfDay > 15) {
    $("#hour3").addClass("past");
  } else if (timeOfDay >= 15 && timeOfDay < 16) {
    $("#hour3").addClass("present");
  } else if (timeOfDay < 15) {
    $("#hour3").addClass("future");
  }

  if (timeOfDay > 16) {
    $("#hour4").addClass("past");
  } else if (timeOfDay >= 16 && timeOfDay < 17) {
    $("#hour4").addClass("present");
  } else if (timeOfDay < 16) {
    $("#hour4").addClass("future");
  }

  if (timeOfDay > 17) {
    $("#hour5").addClass("past");
  } else if (timeOfDay >= 17 && timeOfDay < 18) {
    $("#hour5").addClass("present");
  } else if (timeOfDay < 17) {
    $("#hour5").addClass("future");
  }
}
