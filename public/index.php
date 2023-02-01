<?php
require_once __DIR__.'/../index.php';
require __DIR__ . '/../vendor/autoload.php';

use Dotenv;

Dotenv\Dotenv::createImmutable(__DIR__ . '/')->load();