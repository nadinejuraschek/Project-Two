$(document).ready(function () {
  // ==================================================
  // REQUEST LOGIC
  // ==================================================

  // ==================================================
  // BUTTON LOGIC
  // ==================================================
  //Add class to database
  $("#addclasssubmit").on("click", function (e) {
    e.preventDefault();
    var classObj = {
      // eslint-disable-next-line camelcase
      class_name: $("#nameofclass")
        .val()
        .trim(),
      notes: $("#classmessagetext")
        .val()
        .trim()
    };
    console.log(classObj);

    $.ajax({
      url: "/api/classes",
      method: "POST",
      data: classObj
    }).then(function () {
      location.reload();
    });
  });

  //Add Assignment to Database CLass View
  $("#addassignmentsubmit").on("click", function (e) {
    e.preventDefault();

    var assignObj = {
      // eslint-disable-next-line camelcase
      assignment_name: $("#nameofassignment")
        .val()
        .trim(),
      // eslint-disable-next-line camelcase
      points_possible: $("#points").val(),
      notes: $("#assignmentmessagetext")
        .val()
        .trim(),
      ClassId: $("#ClassId").val()
    };
    console.log(assignObj);

    $.ajax({
      url: "/api/assignments/",
      method: "POST",
      data: assignObj
    }).then(function () {
      location.reload();
    });
  });

  //Add Student To Database
  $("#addstudentsubmit").on("click", function (e) {
    e.preventDefault();
    var studentObj = {
      // eslint-disable-next-line camelcase
      first_name: $("#firstname")
        .val()
        .trim(),
      // eslint-disable-next-line camelcase
      last_name: $("#lastname")
        .val()
        .trim(),
      // eslint-disable-next-line camelcase
      email: $("#email")
        .val()
        .trim(),
      // eslint-disable-next-line camelcase
      contact_name: $("#contactname")
        .val()
        .trim(),
      // eslint-disable-next-line camelcase
      contact_phone: $("#contactphone")
        .val()
        .trim(),
      // eslint-disable-next-line camelcase
      address: $("#address")
        .val()
        .trim(),
      notes: $("#studentmessagetext")
        .val()
        .trim(),
      ClassId: $("#classid").val()
    };
    console.log(studentObj);

    $.ajax({
      url: "/api/students",
      method: "POST",
      data: studentObj
    }).then(function () {
      location.reload();
    });
  });

  //Add Lesson Plan to Database
  $("#addlessonplansubmit").on("click", function (e) {
    e.preventDefault();
    var lessonObj = {
      // eslint-disable-next-line camelcase
      lessonplan_name: $("#nameoflesson")
        .val()
        .trim(),
      notes: $("#lessonmessagetext")
        .val()
        .trim(),
      ClassId: $("#classId").val()
    };
    console.log(lessonObj);

    $.ajax({
      url: "/api/lessonplans",
      method: "POST",
      data: lessonObj
    }).then(function () {
      location.reload();
    });
  });

  //Add notes To Database Students View
  $("#addnotesubmit").on("click", function (e) {
    e.preventDefault();
    var noteObj = {
      // eslint-disable-next-line camelcase
      notes: $("#notemessagetext")
        .val()
        .trim()
    };
    console.log(noteObj);

    $.ajax({
      url: "/api/students/notes",
      method: "POST",
      data: noteObj
    }).then(function () {
      location.reload();
    });
  });

  //Add Students assignment to Database
  $("#addstudentassignmentsubmit").on("click", function (e) {
    e.preventDefault();
    var studentAssignmentObj = {
      // eslint-disable-next-line camelcase
      total_points: $("#totalpoints").val(),
      notes: $("#studentassignmentmessagetext")
        .val()
        .trim()
    };
    console.log(studentAssignmentObj);

    $.ajax({
      url: "/api/students/assignments",
      method: "POST",
      data: studentAssignmentObj
    }).then(function () {
      location.reload();
    });
  });

  //Delete Classes
  $(".class-delete-btn").on("click", function (e) {
    e.preventDefault();
    // Send the DELETE request.
    $.ajax({
      type: "DELETE",
      url: "/api/classes/" + this.name
    }).then(function () {
      location.reload();
    });
  });

  //Delete Students
  $(".student-delete-btn").on("click", function (e) {
    e.preventDefault();
    // Send the DELETE request.
    $.ajax({
      type: "DELETE",
      url: "/api/students/" + this.name
    }).then(function () {
      location.reload();
    });
  });

  //Delete Lesson Plan 
  $(".lessonplan-delete-btn").on("click", function (e) {
    e.preventDefault();
    // Send the DELETE request.
    $.ajax({
      type: "DELETE",
      url: "/api/lessonplans/" + this.name
    }).then(function () {
      location.reload();
    });
  });

  //Delete Assignment
  $(".assignment-delete-btn").on("click", function (e) {
    e.preventDefault();
    console.log("delete")
    // Send the DELETE request.
    $.ajax({
      type: "DELETE",
      url: "/api/assignments/" + this.name
    }).then(function () {
      location.reload();
    });
  });

  // ==================================================
  // FOOTER YEAR
  // ==================================================
  const year = new Date().getFullYear();
  $('#footer-year').text(year);

});

