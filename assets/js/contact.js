jQuery(document).ready(function($) {
	$("#contact__form").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: str,
			success: function(msg) { 
                $('.button').val('Данные отправлены');
                $('.button').style.background = 'green';
			}
		});
		return false;
    });
    $("#contact__form__first").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: str,
			success: function(msg) { 
                $('.button').val('Данные отправлены');
                $('.button').style.background = 'green';
			}
		});
		return false;
    });
    $("#popup__form").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: str,
			success: function(msg) { 
                $('.button').val('Данные отправлены');
                $('.button').style.background = 'green';
			}
		});
		return false;
	});
});