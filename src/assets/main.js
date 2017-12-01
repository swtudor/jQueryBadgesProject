'use strict';
//Instructions:
function getBadges (){
  $.ajax({
    url: 'https://www.codeschool.com/users/swtudor.json',
    type:'GET',
    dataType: 'jsonp',
    success: successFn,
    complete: function(){
      console.log("This request is complete");
    }
  });
}
function successFn(result){
  for (var i=0; i<result.courses.completed.length; i++){
    var title = result.courses.completed[i].title;
    var badge = result.courses.completed[i].badge;
    var courseUrl = result.courses.completed[i].url;
    $('#badges').append('<div class = "course" <h3>' + title + '</h3> <img src=' + badge + '</img> <a href ='+ courseUrl + 'target = "_blank" class = "btn btn-primary">"See Course"</a>');
  }
  console.log(result);
}

//Declarations:
$(document).ready(function() {
  getBadges();
});

/*
Notes on what I did today:
<div class = "course">
  <h3>`+ title + `</h3>
  <img src=`+ badge +`</img>
  <a href =` + courseUrl + `target = '_blank' class = 'btn btn-primary'>See Course</a>
</div>`)
https://www.codeschool.com/projects/use-jquery-to-fetch-and-show-code-school-badges-using-ajax/build
 */
