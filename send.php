<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$text = $_POST['message'];
$file = $_FILES['file'];

// Формирование самого письма
$title = "Заявка с сайта RPO Vipmed";
$body = "
<h2>Заявка</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$text
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
   # $mail->SMTPAuth   = true;
    $mail->SMTPAuth   = false;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = '172.16.20.19'; // SMTP сервера вашей почты
    $mail->Username   = 'mail_apteka_zakaz@vipmed.ru'; // Логин на почте
    $mail->Password   = 'Jkkjhjhdd3423'; // Пароль на почте
    // $mail->SMTPSecure = 'none';
    $mail->Port       = '25';
    $mail->setFrom('mail_apteka_zakaz@vipmed.ru', 'Заявка с сайта RPO VIPMED'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('mail_apteka_zakaz@vipmed.ru');
     // Ещё один, если нужен

    // Прикрипление файлов к письму
if (!empty($file['name'][0])) {
    for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
        $filename = $file['name'][$ct];
        if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
            $rfile[] = "Файл $filename прикреплён";
        } else {
            $rfile[] = "Не удалось прикрепить файл $filename";
        }
    }   
}
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
