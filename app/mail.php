<?php

$recepient = "dantesvv@gmail.com";
$sitename = "Leonis.com";

$name = trim($_POST["fio"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \nТелефон: $phone;

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");