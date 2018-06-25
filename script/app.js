$(document).ready(function(){


    $(".triangle-top").mouseover(function(){
        $(".required-top").css("visibility", "visible");
    });
    $(".triangle-top").mouseout(function(){
        $(".required-top").css("visibility", "hidden");
    });

    $(".triangle-bottom").mouseover(function(){
        $(".required-bottom").css("visibility", "visible");
    });
    $(".triangle-bottom").mouseout(function(){
        $(".required-bottom").css("visibility", "hidden");
    });

    $(".asterisc-top-reset").mouseover(function(){
        $(".required-top-reset").css("visibility", "visible");
    });
    $(".asterisc-top-reset").mouseout(function(){
        $(".required-top-reset").css("visibility", "hidden");
    });


    //validate e-EMAIL
    function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function validate() {
    var $result = $("#result");
    var email = $("#email").val();
    $result.text("");

    if (validateEmail(email)) {
      $result.text("");
    } else {
      $result.text("Invalid email adress");
      $result.css("color", "red");
    }
    return false;
  }

    $("#validate").bind("click", validate);



  const forgottenButton = document.querySelector('.forgotten__button');
  const cancelButton = document.querySelector('.form__button-cancel')
  const label = document.querySelector('.form_container-reset');
  const label2 = document.querySelector('.form_container');


  const switchWindows = function(){
    label.classList.toggle('invisible')
    label2.classList.toggle('invisible')
  }

  forgottenButton.addEventListener('click', function(event){
    event.preventDefault()
    switchWindows()
  })

  cancelButton.addEventListener('click', function(event){
    event.preventDefault()
    switchWindows()
  })

});
