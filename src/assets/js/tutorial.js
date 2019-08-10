$('document').ready(function(){

    var profile_intro =  new Anno([

          { 
            target:'#profile_details',
            content: "<strong>Contact Details</strong><br>Enter your contact details below",
            position: 'top'
          }
      ]);

      var menu_intro =  new Anno([

        { 
          target:'#menu',
          content: "<strong>The menu</strong><br>This is the menu. From here you can access your profile, the lodge profile, education and more.",
          position: 'bottom'
        }
    ]);

      if(sessionStorage) {
        //display the tutorial element

        console.log(sessionStorage.getItem('display_menu'));

        if(sessionStorage.getItem('display_menu') === null) {

          //if the menu element is visible
          if($('#menu').length) {
            menu_intro.show();

            //set the display to false
            sessionStorage.setItem('display_menu', 'false');
          }
        }

        //profile details
        if(sessionStorage.getItem('profile_intro') === null) {
          
          //if the profile_detail element exists
          if($('#profile_details').length) {
            profile_intro.show();

          //set the display to false
          sessionStorage.setItem('profile_intro', 'false');
        }
      }
        
    }
});