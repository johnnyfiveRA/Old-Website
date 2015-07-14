<?php
	
  $contactTime = date("m/Y/d H:i:s");
  
	$fName = $_POST["fName"];
	$lName = $_POST["lName"];
	$bizName = $_POST["bizName"];
	
  	$address = $_POST["address"];
	$phone= $_POST["phone"];
	
  	$email= $_POST["email"];
	$extra= $_POST["extra"];
  
	$wantCustom = $_POST["wantCustom"];
  	$wantWeb = $_POST["wantWeb"];
	
  $contact = array ($contactTime,$fName, $lName, $bizName, $address, $phone, $email, $wantCustom, $wantWeb,  $extra);

	$filepath = "/media/samba/sitecontacts.csv";
	
	$fileres = fopen("$filepath","a");

	fputcsv($fileres, $contact);
  fclose($fileres);
  print("Thank you, we will contact you shortly. You will be redirected in 5 seconds");
  
  header("Refresh: 5; url=../services.html");
  exit();
?>