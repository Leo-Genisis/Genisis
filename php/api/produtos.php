<?php

  require_once "../actions/db_connection.php";

  $sql=  "SELECT * FROM produtos";
  $result= $conn -> query( $sql );
  $produtos = [];

  while($row = mysqli_fetch_assoc($result)){
      $produtos[] = $row;
  }

  header("Access-Control-Allow-Origin:*");
  header("Content-type: application/json");
  echo json_encode($produtos);

?>