<?php
namespace App\Controllers;
use Exception;
use App\Core\DbConnect;
use App\Model\UsersModel;

class UsersController extends DbConnect{

    /**
     *  Connects to database
     * @param array $data{
     *        @param string $firstname : firstname of the user,
     *        @param string $lastname : lastname of the user,
     *        @param string $email : email of the user, 
     *        @param string password : password of the user
     * }
     *  */

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

