<?php
namespace App\Controllers;

use App\Core\Controller;

class HomeController extends Controller
{
    /*
    * return view
    */
    public function index()
    {
        return $this->view('welcome',["name" => "Cogip"]);
    }

    public function apiInvoice()
    {
        return $this->show('readInvoices');
    }

}