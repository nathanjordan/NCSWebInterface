$().ready( function() {
	$('#model').show();
	$('#simulation').hide();
	$('#cluster').hide();
	$('#results').hide();
	$('#visualization').hide();
});

$().ready( function() {
	$('#mainNav a').click( function() {
		var target;
		$('#mainNav li').removeClass('active');
		$(this).parent().addClass('active');
		hidePages();
		target = $(this).attr('href');
		$(target).show();
	});
});

function hidePages() {
	$('#pages .container').hide();
}