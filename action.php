<?php
    $contact = $_POST['contact'];
    $nomen = $_POST['nomen'];
    $subject = "Заявка с сайта";
    $from = 'From: Форма обратной связи<feedbackform@shrimp.gg>\r\n';
    $message = "Контакт: " . $contact . ". Зовут: " . $nomen;
    mail("vlasnikita@shrimp.gg",$subject,$message,$from);
?>