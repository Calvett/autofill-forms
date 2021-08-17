var autoFill = function(){
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
