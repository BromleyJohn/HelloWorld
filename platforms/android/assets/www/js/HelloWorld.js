function buttonClicked(){
      alert("You clicked the button!");
   }

function changeColour(newColour) {
    var elem = document.getElementById("para1");
    elem.style.color = newColour;
  }

 
 $(document).ready(function(){
    alert("U R here!!!"); 

   // $.ajax({ // ajax call starts
        
   //      url: 'http://johnah.byethost7.com/cities.php?callback=?', // JQuery loads serverside.php
        
        //url: 'cities.php', // JQuery loads serverside.php
  //	      dataType: 'jsonp', // Choosing a JSON datatype json for local jasonp for crossweb - NOT SURE ABOUT THIS!!!
   //       success: function(data) // Variable data contains the data we get from serverside
   //       {
   //       $('#cities').html(''); // Clear #bands div
   //       for (var i in data) {
   //          $('#cities').append(data[i] + '<br/>');
   //       }

    //    }
  //  });
   // //return false; 
});