<?php
namespace App\Controllers;
use App\Core\DbConnect;
use App\Model\UsersModel;

class UsersController extends DbConnect{

    public function registerUser($data){
        
        (new UsersModel)->createUser($data['firstname'], $data['lastname'], $data['email'], $data['password']);
        
    }

}

