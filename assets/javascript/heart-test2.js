$(document).ready(function(){
  $("#start").css("position","absolute");
  $("#start").css("left",$(window).width()/2-41);
  $("#start").css("top",$(window).height()/2);
  $(window).resize(function(){
    $("#start").css("position","absolute");
    $("#start").css("left",$(window).width()/2-41);
    $("#start").css("top",$(window).height()/2);
  });

  $("#start").on("click",function(){
    $(".part").addClass("hidden");
    $("#part2").removeClass("hidden");
  })

  $("#next_page").on("click",function(){
    $(".part").addClass("hidden");
    $("#part3").removeClass("hidden");
  })

  island_tpl = _.template($('#island_tpl').html())(islands);
  $("#answer-list").append(island_tpl);
  choice_tpl = _.template($('#choice_tpl').html())(islands);
  $("#choice-list").append(choice_tpl);
  result_tpl = _.template($('#result_tpl').html())({results:result2});
  $("#result-list").append(result_tpl);

  $("input[type='radio']").on("click",function(){
    $(".part").addClass("hidden");
    $("#part4").removeClass("hidden");
    num = $(this).data("serial-num");
    $result = $("#result-"+num);
    $(".result").addClass("hidden");
    $result.removeClass("hidden");
  })
})
