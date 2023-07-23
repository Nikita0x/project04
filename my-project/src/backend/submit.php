 <?php
 $config = require 'config.php';

 $name = $_POST['name'];
 $subject = $_POST['subject'];
 $email = $_POST['email'];
 $message = $_POST['message'];

//sanitization 
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$subject = htmlspecialchars($subject, ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

$name = trim($name);
$subject = trim($subject);
$email = trim($email);
$message = trim($message);

// Check if the form is submitted

if($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the form data
    $name = $_POST["name"];
    $subject = $_POST['subject'];
    $email = $_POST["email"];
    $message = $_POST["message"];


 // Validate the data (you can add your validation logic here)


     // Connect to the database
     $servername = $config['servername'];
     $username = $config['username']; // Your MySQL database username
     $password = $config['password'];  // Change this to your MySQL password
     $dbname = $config['dbname'];         // Change this to your MySQL database name

    // Get the current timestamp using PHP date() function
    $currentTimestamp = date('Y-m-d H:i:s');

     $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    // Insert the data into the database
     $sql = "INSERT INTO form_submissions (name, subject, email, message, created_at) VALUES ('$name', '$subject', '$email', '$message', '$currentTimestamp')";
     if ($conn->query($sql) === TRUE) {
        echo "Form submission successful!";
     } else {
         echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    $conn->close();
};