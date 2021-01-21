


    $(document).ready(function(){

    	var classHighlight = 'highlight';
		var $selected = $('li').click(function(e) {
   		 e.preventDefault();
    	$selected.removeClass(classHighlight);
    	$(this).addClass(classHighlight);
		});


      
        $(" #brownWood " ).click(function(){
            changeBodyMaterial("Dark_Wood");

        });
         $(" #lightWood " ).click(function(){
            changeBodyMaterial("Ash_Wood");

        });
         $(" #black " ).click(function(){
            changeDoorMaterial("GRAPHITE");

        });
         $(" #blue " ).click(function(){
            changeDoorMaterial("Green Graphite");

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

