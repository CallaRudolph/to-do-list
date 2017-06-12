function Task(task, descriptor) {
  this.task = task;
  this.descriptor = descriptor;
}
  Task.prototype.taskAddition = function() {
    return this.task;
  }

  Task.prototype.taskAddition1 = function() {
    return this.descriptor;
  }
/////////
$(document).ready(function() {
  $("form#toDo").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("#new-task").val();
    var inputtedDescript = $("#new-descript").val();

    var newTask = new Task(inputtedTask, inputtedDescript);

    $("ul#doList").append("<li><span class='list'>" + newTask.taskAddition() + "</span> details: " + "<span class='details'>" + newTask.taskAddition1() + "</li></span>");

    $(".details").hide();
    $(".list").last().click(function() {
      $("#show-doList").show();
      $("#show-doList h2").text(newTask.task);
      $(".task").text(newTask.task);
      $(".details").show();
      // $(".details").text(newTask.descriptor);
    });

    $("input#new-task").val("");
    $("input#new-descript").val("");

    // $("input:checkbox[name=done]:checked").each(function() {
    //   $("#show-doneList").show();
    //   var checkbox = $(this).val();
    //   $('#show-doneList').append("<li><span class='listed'>" + newTask.taskAddition() + "</span></li>");
    //   $(".task").text(newTask.task);
    //   $(".details").hide(newTask.descriptor);
    //   $("#show-doList").hide();
    // });
  });
});
