function buttonClicked(){
   alert("You clicked the button!");
   document.getElementById('loaded').innerHTML = 'CLICKITY CLICK';
}

function changeColour(newColour) {
   var elem = document.getElementById("para1");
   elem.style.color = newColour;
}

function showCities() {
   

  $.ajax({ // ajax call starts
        
         url: 'http://johnah.byethost7.com/cities.php?callback=?', // JQuery loads serverside.php
        
          //url: 'cities.php', // JQuery loads serverside.php
  	      dataType: 'json', // Choosing a JSON datatype json for local jasonp for crossweb - NOT SURE ABOUT THIS!!!
          success: function(data) // Variable data contains the data we get from serverside
          {
          $('#cities').html(''); // Clear #bands div
          for (var i in data) {
             $('#cities').append(data[i] + '<br/>');
          }

          }
    });

}      
 

