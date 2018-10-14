<?php

$recepient = "perovav.home@gmail.com";
$sitename = "NORD-KUDO";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nЭлектронная почта: $email \nТелефон: $phone \nВопрос: $text";

$pagetitle = "Поступил вопрос от посетителя сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");