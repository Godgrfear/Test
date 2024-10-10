<?php

    session_start();

    if($_SERVER["REQUEST_METHOD"] == "POST"){

    /*Αρχικά αναθέτω δυο μεταβλητές, μια temp για να προστατέψω
    τον κωδικό του χρήστη και κατευθείαν μέσα από την 
    session αναθέτω το username*/
    $_SESSION["username"] = filter_input(INPUT_POST,"username",FILTER_SANITIZE_SPECIAL_CHARS);
    $password = $_POST["password"];

    /*Προστασία κωδικού*/
    $Protected_Password = password_hash($password,PASSWORD_DEFAULT);

    $_SESSION["password"] = $Protected_Password;
        
    if(!empty($_SESSION["username"]) && !empty($_SESSION["password"])){

        header("Location:HomePage.html");

    }
    
}

?>