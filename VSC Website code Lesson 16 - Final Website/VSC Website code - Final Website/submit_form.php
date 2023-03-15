<?php
  $servername = "localhost";
  $username = "uesbypzv0qdpa";
  $password = "ggylakarpbo8";
  $dbname = "db465gbjruiyv6";

  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

    if (isset($_POST['email'])) {
    $email = $_POST['email'];

    $sql = "INSERT INTO email_list (email)
    VALUES ('$email')";

    if ($conn->query($sql) === TRUE) {
      // Read the PDF file into a string
      $pdfData = file_get_contents('chatgptwebdesign.com/example-pdf.pdf');

      // Return the PDF data as the response
      header('Content-Type: application/pdf');
      header('Content-Disposition: attachment; filename="example-pdf.pdf"');
      header('Content-Length: ' . strlen($pdfData));
      echo $pdfData;
    } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
    }
  }

  $conn->close();
?>