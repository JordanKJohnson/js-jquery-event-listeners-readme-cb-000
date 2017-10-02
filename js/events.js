function getIt(){
  alert("Hey!");
}

function frameIt(){
  document.querySelector("img").className = "tasty";
}

function submitIt(){
  alert('Your form is going to be submitted now.');
  return;
}

function pressIt(key){
  if(key == 71){
      alert('G was pressed.');
  }
  else{
    //alert('G was not pressed.');
  }
  return;
}

$(document).ready(function(){

  $(p).on('click', function(key) {
    getIt();
  });

  $("form").on("submit", function() {
    submitIt();
  });

  document.keydown = function(e) {
    e = e || window.event;
    var button = (typeof e.which != "undefined") ? e.which : e.button;
    pressIt(button);
  };

});
