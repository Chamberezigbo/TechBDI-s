<?php
require 'mail.php'; // Include your PHPMailer config + sendMail() function

// Sanitize and get POST input
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$subject = trim($_POST['subject'] ?? 'New Message from Website');
$message = trim($_POST['message'] ?? '');
$formType = trim($_POST['form_type'] ?? 'general');

// Validate required fields
if (empty($name) || empty($email) || empty($message)) {
    echo "<script>alert('Please fill in all required fields.'); window.history.back();</script>";
    exit;
}

// Set the fixed recipient
$recipient_email = "technologybeyondisabilityinit@gmail.com";
$recipient_name = "Technology Beyond Disability";

// Create email subject and body
$email_subject = "$subject - [$formType Form Submission]";

$email_body = "
  <h3>New Message from Website</h3>
  <p><strong>Form Type:</strong> $formType</p>
  <p><strong>Name:</strong> $name</p>
  <p><strong>Email:</strong> $email</p>
  <p><strong>Message:</strong></p>
  <p>$message</p>
";

// Send the message
$success = sendMail($recipient_email, $recipient_name, $email_subject, $email_body);

// Feedback to user
if ($success) {
    echo "<script>alert('Message sent successfully!'); window.history.back();</script>";
} else {
    echo "<script>alert('Failed to send message. Please try again later.'); window.history.back();</script>";
}
?>
