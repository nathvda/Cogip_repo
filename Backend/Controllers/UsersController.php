<?php
namespace App\Controllers;
use Exception;
use App\Core\DbConnect;
use App\Model\UsersModel;

class UsersController extends DbConnect{

    public function registerUser($data){
        
        try {
        (new UsersModel)->createUser($data['firstname'], $data['lastname'], $data['email'], $data['password']);
        return $data;
    }
        catch (Exception $e){
            return $e;
        }
    }

}

