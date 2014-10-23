$(document).ready(function(){
  var total_score=0

  activate = function(element){
    $(".question").addClass("hidden");
    element.removeClass("hidden");
  }

  $("#start").on("click",function(){
    $("#question").addClass("hidden");
    $("#question-list").removeClass("hidden");
    $("#question-1").removeClass("hidden");
    $("#reset").removeClass("hidden");
    $("#cover").addClass("hidden");
    $(this).addClass("hidden");
  })

  process_result = function(){
    if (total_score >= 10 && total_score <= 15)
      $result = $("#tiger");
    else if (total_score >= 16 && total_score <= 22)
      $result = $("#collie");
    else if (total_score >= 23 && total_score <= 30)
      $result = $("#kangaroo");
    else
      alert("are you alien?");
    $("#result-list").removeClass("hidden");
    activate($result);
  }

  q_tpl = _.template($('#q_tpl').html())({datas: questions});
  $("#question-list").append(q_tpl);
  r_tpl = _.template($('#r_tpl').html())({datas: result});
  $("#result-list").append(r_tpl);

  $("input[type='radio']").on("click",function(){
    total_score = total_score + parseInt(this.value);
    num = $(this).data("serial-num")+1;
    $question = $("#question-"+num)
    if($question.length==0) {
      process_result()
    } else {
      activate($question)
    }
  });

  $("#reset").on("click",function(){
    $(".question").addClass("hidden");
    $("#question-list").addClass("hidden");
    $("#cover").removeClass("hidden");
    $("#start").removeClass("hidden");
    $(this).addClass("hidden");
    $("input[type='radio']").attr("checked",false);
    $("#result-list").addClass("hidden");
    $(".result").addClass("hidden");
    total_score=0
  })

})
