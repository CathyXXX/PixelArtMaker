// Select color input
// Select size input
var height, width, color;

// When size is submitted by user, call makeGrid() 
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    makeGrid(height, width);
//    console.log('Height: ' + height + ' and width:' + width);
});

//creates grid's row and columns, r=rows, c=columns
function makeGrid(x, y) {
    grid = $("#pixelCanvas")[0]; //clear grid for next
	while (grid.rows.length > 0)
    grid.deleteRow(0); 
    
    //Your code goes here!
    
    for (var r = 1; r <= x; r++){
        $('#pixelCanvas').append('<tr id=table' + r + '></tr>');
        for (var c = 1; c <= y; c++) {
            $('#table' + r).append('<td></td>');
        }
    }
    
    //add and clear of colors for cells
    $('td').click(function addColor(){
        color = $('#colorPicker').val();
        
        if($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' +color);
        }
    })
    
}
