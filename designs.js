var color;

$('#sizePicker').submit(function (event){
	event.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWeight').val();
	makeGrid(height, width);
	
})


function makeGrid(line, column) {


	$('tr').remove();
	for (var i = 1; i <= line; i++)
	{
		$('#pixelCanvas').append('<tr></tr>');
		for (var j = 1; j <= column; j++)
		{
			$('tr').last().append('<td></td>');

		}

	}
	
	
	$('td').click(function adderColor(){
		color = $('#colorPicker').val();

		if ($(this).attr('style'))
		{
			$(this).removeAttr('style');
		}
		else 
		{
			$(this).css('background-color', color);
		}

	})
}


