$('document').ready(function(){
    var intro =  new Anno([

          { 
            target:'#contact_details',
            content: "<strong>Contact Details</strong><br>Enter your contact details below",
            position: 'top'
          }
      ]);

      //if the element exists
      if($('#contact_details').length) {
        intro.show();
      };
});