
$(document).ready(function(){
  
  $(".click").on("click", function() {
    $("#searchIco").hide("fast");
    $(".block").animate({"opacity": 1});
    $("#searchTerm").focus();
  });

  $("#searchIco").on("click", function() {
    $(this).hide();
    $(".click").hide();
    $(".block").animate({"opacity": 1});
    $(".block").slideDown(900);
    $("#searchTerm").focus();
  });
    
  $("#search-form").submit(function(e) {
    e.preventDefault();
    var searchTerm = $("#searchTerm").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
    $.ajax({
      url: url,
      type: "GET",
      async: false,
      dataType: "json",
      success: function(data, status, jqXHR){
      for(var i = 0; i < data[1].length; i++) {
        $("#output").prepend("<div><div class='well'><a href="+data[3][i]+" target='_blank'><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>")
      };
       
    } //success function closed
    }); //ajax closed 
  });//click search closed
  
});//document ready closed