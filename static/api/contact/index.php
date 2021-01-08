<?php
//include the two files
include_once('classes/sendmail.php');

header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if ($_POST){
    //@important: Please change this before using
    http_response_code(200);
    $subject = 'comanda';
    $message = $_POST['message'];
    //Actual sending email
    $adminEmail = "stefan.c.0608@mail.ru";
    $sendEmail = new Sender($adminEmail, $from = null, $subject, $message);
    $sendEmail->send();
} else {
 // tell the user about error
    $SendMailFailederrorMessage = "Empty form";
    echo json_encode(
     [
        "sent" => false,
        "message" => $SendMailFailederrorMessage
     ]
 );
}