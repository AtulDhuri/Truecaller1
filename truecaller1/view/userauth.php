<?php 
 
/**
 * Description: User authentication
 * @author Prem Tiwari
 */
 
//include database connection file
require_once 'config.php';
 
//define database object
global $dbc;
 
$stmt = $dbc->prepare("SELECT pnumber,ppass from plogin WHERE 
pnumber='".$_POST['username']."' && ppass='".  md5($_POST['password'])."'");
 
$stmt->execute();
 
$row = $stmt->rowCount();
 
if ($row > 0){    
    echo 'correct';
} else{ 
    echo 'wrong';
}
 
?> 	