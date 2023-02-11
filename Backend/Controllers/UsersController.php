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

    public function add($data){
        
        try {
        (new UsersModel)->createUser($data['firstname'], $data['lastname'], $data['email'], $data['password']);
        echo "bonjour, " . $data['firstname'];
    }
        catch (Exception $e){
            return $e;
        }
    }

    public function login($data){
        
        try {

        $res = (new UsersModel)->checkUser($data['email']);

        if (password_verify($data['password'], $res[0]['password'])){
        
        session_start();
        $_SESSION['user'] = $res[0]['first_name'];
        }

    }
        catch (Exception $e){
            return $e;
        }
    }

}

