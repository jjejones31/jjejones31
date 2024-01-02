<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $email = $_POST['email'];
    $other = isset($_POST['other']) ? $_POST['other'] : '';
    $referrer = $_POST['referrer'];
    $phone = $_POST['phone'];

    // Your email address where you want to receive the submissions
    $to = 'jjejonestutoring@gmail.com';

    // Subject
    $subject_email = 'New Sign-Up';

    // Message
    $message = "Name: " . $name . "\r\n";
    $message .= "Subject: " . $subject . "\r\n";
    if ($subject === 'Other') {
        $message .= "Other: " . $other . "\r\n";
    }
    $message .= "Referrer: " . $referrer . "\r\n";
    $message .= "Phone Number: " . $phone . "\r\n";
    $message .= "Email: " . $email . "\r\n";

    // Headers
    $headers = "From: " . $name . "\r\n";
    $headers .= "Reply-To: " . $name . "\r\n";

    // Sending email
    if (mail($to, $subject_email, $message, $headers)) {
        echo '<script>alert("Thank you for signing up!"); window.location.href="tutoring.html";</script>';
    } else {
        echo '<script>alert("Oops! Something went wrong. Please try again later."); window.location.href="tutoring.html";</script>';
    }
}
?>