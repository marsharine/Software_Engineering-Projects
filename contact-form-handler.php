<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    // Set the recipient email address
    $to = "marsharineasimpson@gmail.com"; // Change to your email address
    $subject = "New Message from Contact Form";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message";

    // Send the email
    if (mail($to, $subject, $body)) {
        echo "Email sent successfully!";
    } else {
        echo "Email sending failed.";
    }
}
?>