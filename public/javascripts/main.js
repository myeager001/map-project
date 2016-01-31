$(document).ready(function() {
    $('#map').usmap({
      click: function(event, data){
        console.log(window.location);
      window.location.replace('http://localhost:3000/state/'+data.name);
      }
    });

    $('#back').on('click', function(){
      window.location.replace('http://localhost:3000')
    })

  });
