// Select color input
// Select size input
    $(function(){
    var height, width;
    
    // Call makeGrid after size submission    
    $('input[type=submit]').on('click', function(event){
        //reset table for next
        $('tr').remove();

        height = Number($('#inputHeight').val());
        width = Number($('#inputWeight').val());

        event.preventDefault();
        makeGrid();
    });

    //Jquery's event delegation, listen to one element (td)
    $('table').on('click', 'td', function() {
        var selectedColor = $('#colorPicker').val();

        var wBackground = "rgba(0, 0, 0, 0)";

        if($(this).css('backgroundColor') === wBackground) {
            $(this).css('background', selectedColor);
        }else{            
            $(this).css('background', wBackground);
        }
    });


    
    function makeGrid() {
        var table, row, eachRow, cell;

        table = document.getElementById("pixelCanvas");
        for(row = 0; row < height; row++) {
            eachRow = table.insertRow(row);

        for(cell = 0; cell < width; cell++) 
        	eachRow.insertCell(cell);            
        }


    }

});