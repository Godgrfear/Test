<?php
    session_start();

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        // the message
        $msg = "First line of text\nSecond line of text";

        // use wordwrap() if lines are longer than 70 characters
        $msg = wordwrap($msg,70);

        // send email
        mail("dimitrisliolios05@gmail.com","My subject",$msg);
    }

?>