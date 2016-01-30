$(document).ready(function() {
    $('#map').usmap({
      click: function(event, data){

        console.log(data)
      }
    });

  });
