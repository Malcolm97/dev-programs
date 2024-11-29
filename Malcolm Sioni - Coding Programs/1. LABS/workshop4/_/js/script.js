$(document).bind('pageinit', function(ev)
{
	$('#search-contact').on('click', function()
  {
		var fn = $('#first-name').val();
		var ln = $('#last-name').val();

		$.get('results.php', {firstname: fn, lastname: ln}, function(data)
    {
			$('#matches').html(data);
		});

	});
});

$(document).bind('pageshow', function(ev)
{});
