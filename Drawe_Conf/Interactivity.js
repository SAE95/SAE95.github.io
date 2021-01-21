


    $(document).ready(function(){

    	var classHighlight = 'highlight';
		var $selected = $('li').click(function(e) {
   		 e.preventDefault();
    	$selected.removeClass(classHighlight);
    	$(this).addClass(classHighlight);
		});


      
        $(" #brownWood " ).click(function(){
            changeDoorMaterial("Dark_Wood");

        });
         $(" #lightWood " ).click(function(){
            changeDoorMaterial("Ash_Wood");

        });
         $(" #black " ).click(function(){
            changeBodyMaterial("GRAPHITE");

        });
         $(" #blue " ).click(function(){
            changeBodyMaterial("Green Graphite");

        });



    });


    function changeDoorMaterial(matName)

    { 
      Unlimited3D.changeMaterial({parts:['Belgrave_Sideboard-1'], material:matName})

    }

    function changeBodyMaterial(matName)

    { 
      Unlimited3D.changeMaterial({parts:['Belgrave_Sideboard-2'], material:matName})

    }

