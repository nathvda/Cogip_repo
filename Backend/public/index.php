<?php

require_once __DIR__.'/../index.php';

use Dotenv\Dotenv;
use App\Core\DbConnect;

Dotenv::createImmutable(__DIR__ . '/')->load();

$bdd = new DbConnect();
$bdd->connect();

?>

