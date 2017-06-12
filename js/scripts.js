function Task(task, descriptor) {
  this.task = task;
  this.descriptor = descriptor;
}
  Task.prototype.taskAddition = function() {
    return this.task + " " + this.descriptor;
  }

  // Task.prototype.taskAddition1 = function() {
  //   return this.descriptor;
  // }
/////////
$(document).ready(function() {
  $("form#toDo").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("#new-task").val();
    var inputtedDescript = $("#new-descript").val();

    var newTask = new Task(inputtedTask, inputtedDescript);

    $("ul#doList").append("<li><span class='list'>" + newTask.taskAddition() + "</li></span>");

    // $(".details").hide();
    // $(".list").last().click(function() {
    //   $("#show-doList").show();
    //   $("#show-doList h2").text(newTask.task);
    //   $(".task").text(newTask.task);
      // $(".details").show();
      // $(".details").text(newTask.descriptor);
    // });

    $("input#new-task").val("");
    $("input#new-descript").val("");


    $(".list").last().click(function() {
      $("ul#show-doneList").append("<li>" + newTask.taskAddition() + "</li>");
      $("#show-doneList").show();
      $("#show-doneList h4").show();
      $(this).fadeOut();
      // $("<li>" + this + "</li>").empty();
      // $(".task").text(newTask.task);


    });
  });
});
