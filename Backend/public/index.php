<?php

require_once __DIR__.'/../index.php';

use Dotenv\Dotenv;
use App\Core\DbConnect;

Dotenv::createImmutable(__DIR__ . '/')->load();

$bdd = new DbConnect();
$bdd->connect();

?>

<h2>Test add company</h2>
<form method="post" action="../companies/add">
    <input type="text" name="name">
    <input type="text" name="type">
    <input type="text" name="country">
    <input type="text" name="tva">
    <button type="submit">send</button>
</form>

<h2>Test add invoice</h2>
<form method="post" action="../invoices/add">
    <input type="text" name="ref">
    <input type="date" name="date_due">
    <input type="number" name="id_company">
    <button type="submit">send</button>
</form>

<h2>Test add contact</h2>
<form method="post" action="/contacts/add">
    <input type="text" name="name">
    <input type="number" name="company_id">
    <input type="email" name="email">
    <input type="text" name="phone">
    <button type="submit">send</button>
</form>


<h2>Test edit company</h2>
<b>Doesn't work cause needs JSON and PUT/PATCH function (front)</b>

<form method="post" action="./test.php">
    <input type="text" name="name">
    <input type="text" name="type">
    <input type="text" name="country">
    <input type="text" name="tva">
    <button type="submit">send</button>
</form>

<h2>Test edit invoice</h2>
<b>Doesn't work cause needs JSON and PUT/PATCH function (front)</b>

<form method="post" action="test.php">
    <label>ref</label>
    <input type="text" name="ref">
    <label>date_due</label>
    <input type="date" name="date_due">
    <label>id_company</label>
    <input type="number" name="id_company">
    <button type="submit">send</button>
</form>

<h2>Test edit contact</h2>
<b>Doesn't work cause needs JSON and PUT/PATCH function (front)</b>

<form method="post" action="/contacts/add">
    <input type="text" name="name">
    <input type="number" name="company_id">
    <input type="email" name="email">
    <input type="text" name="phone">
    <button type="submit">send</button>
</form>

<h2>Test add contact</h2>
<form method="post" action="/contacts/add">
    <input type="text" name="name">
    <input type="number" name="company_id">
    <input type="email" name="email">
    <input type="text" name="phone">
    <button type="submit">send</button>
</form>

<h2>Test delete company</h2>
<b>Doesn't work cause needs JSON and DELETE function (front)</b>

<form method="post" action="/companies/5/delete">
    <button type="submit">send</button>
</form>

<h2>Test delete invoice</h2>
<b>Doesn't work cause needs JSON and DELETE function (front)</b>

<form method="post" action="/invoices/5/delete">
    <button type="submit">send</button>
</form>

<h2>Test delete contact</h2>
<b>Doesn't work cause needs JSON and DELETE function (front)</b>

<form method="post" action="/contact/1/delete">
    <button type="submit">send</button>
</form>

<h2>Registering test</h2>

<form method="post" action="/register">
    <input type="text" name="firstname">
    <input type="text" name="lastname">
    <input type="email" name="email">
    <input type="text" name="password">
    <button type="submit">register</button>
</form>
