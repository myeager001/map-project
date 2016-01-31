$(document).ready(function() {
    console.log('docRdy')
    $('#map').usmap({
      click: function(event, data){

        console.log(data)
      }
    });

  });
