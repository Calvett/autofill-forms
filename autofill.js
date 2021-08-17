var autoFill = function(){
  if (typeof jQuery == 'undefined') {
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    script.onload = function() {
        var $ = window.jQuery;
        // Use $ here...
    };
    document.getElementsByTagName("head")[0].appendChild(script);
  }
  var $form = $('form:visible');
  var inputs = $form.find('input, select');
  $.each(inputs, function(key, value){
    $input = $(value);
    inputType = $input.attr('type');
    switch (inputType) {
      case "text":
        var name = $input.attr('name');
        if(name == 'dni'){
          $input.val('55248094R');
        }else if(name == 'postalcode'){
          $input.val('28880');
        }else{
          $input.val('wadus');
        }
        break;
      case "email":
        $input.val('wadus@wadus.es');
        break;
      case "password":
        $input.val('123456789');
        break;
      case "date":
        $input.val('1982-11-17');
        break;
      case "number":
        $input.val('915767831');
        break;
      case "radio":
        var radioName = $input.attr('name');
        var groupe = $('input[name='+radioName+']');
        if(groupe.length == 2) {
          groupe.first().attr('checked',true);
        }
        break;
      case undefined:
        $input.find('option:not([disabled]):first').attr('selected',true);
        break;
      case "checkbox":
        $input.attr('checked',true);
        break;

    }
  });
};
