function Task(task, descriptor) {
  this.task = task;
  this.descriptor = descriptor;
}
  Task.prototype.taskAddition = function() {
    return this.task;
  }


/////////
$(document).ready(function() {
  $("form#toDo").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("#new-task").val();
    var inputtedDescript = $("#new-descript").val();

    var newTask = new Task(inputtedTask, inputtedDescript);

    $("ul#doList").append("<li><span class='list'>" + newTask.taskAddition() + "</span></li>");

    $(".list").last().click(function() {
      $("#show-doList").show();
      $("#show-doList h2").text(newTask.task);
      $(".task").text(newTask.task);
      $(".details").text(newTask.descriptor);
    });

    $("input#new-task").val("");
    $("input#new-descript").val("");
  });
});
