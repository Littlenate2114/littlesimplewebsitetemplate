$(document).ready(function() {
  $("p").hide();

    $("button").click(function(){
      $("p").toggle(200);
    });

    if($("p").hide()) {
      alert("wtf");
    }else{
      alert("yeah");
    }

});
