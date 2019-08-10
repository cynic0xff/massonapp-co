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

    var lodge_profile_intro =  new Anno([

      { 
        target:'#lodge_profile',
        content: "<strong>Lodge Profile</strong><br>Enter lodge profile details here.",
        position: 'center-right',
        arrowPosition: 'center-bottom'
      }
  ]);

      if(sessionStorage) {
        //display the tutorial element

        //menu
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

       //lodge profile details
       if(sessionStorage.getItem('lodge_profile_intro') === null) {
          
        //if the profile_detail element exists
        if($('#lodge_profile').length) {
          lodge_profile_intro.show();

        //set the display to false
        sessionStorage.setItem('lodge_profile_intro', 'false');
      }
    }
        
    }
});