
// Отправка данных на сервер
function send(event, php){
console.log("Отправка запроса");
$('.button').val('Сообщение отправлено');
event.preventDefault ? event.preventDefault() : event.returnValue = false;
var req = new XMLHttpRequest();
req.open('POST', php, true);
req.onload = function() {
	if (req.status >= 200 && req.status < 400) {
	json = JSON.parse(this.response); // Ебанный internet explorer 11
    	console.log(json);
    	// ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
    	if (json.result == "success") {
    		// Если сообщение отправлено
			$('.button').val('Данные отправлены');
			$("#contact__form")[0].reset();
			$("#contact__form__first")[0].reset();
			$("#popup__form")[0].reset();
			$(".fa-close").click();
			$('.sucess').css('display', 'flex');
			setTimeout(() => {
				$('.sucess').css('display', 'none');
				$('.button').val('Отправить');
			}, 2000);
    	} else {
    		// Если произошла ошибка
    		$('.button').val('Произошла ошибка');
    	}
    // Если не удалось связаться с php файлом
    } else {alert("Ошибка сервера. Номер: "+req.status);}}; 

// Если не удалось отправить запрос. Стоит блок на хостинге
req.onerror = function() {alert("Ошибка отправки запроса");};
req.send(new FormData(event.target));
}