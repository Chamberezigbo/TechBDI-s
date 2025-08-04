<?php
// Set recipient email
$to = "technologybeyondisabilityinit@gmail.com";

// Get POST data
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$subject = $_POST['subject'] ?? 'No Subject';
$message = $_POST['message'] ?? '';
$formType = $_POST['form_type'] ?? 'general';

// Prepare email headers
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Format the message
$fullMessage = "You have a new message from the $formType form.\n\n";
$fullMessage .= "Name: $name\n";
$fullMessage .= "Email: $email\n";
$fullMessage .= "Message:\n$message\n";

// Send the email
if (mail($to, $subject, $fullMessage, $headers)) {
    echo "<script>alert('Message sent successfully!'); window.history.back();</script>";
} else {
    echo "<script>alert('Failed to send message.'); window.history.back();</script>";
}
?>
