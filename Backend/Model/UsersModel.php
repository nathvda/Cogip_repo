<?php
namespace App\Model;

use Exception;
use App\Core\DbConnect;

class UsersModel extends DbConnect{

    public function createUser($firstname, $lastname, $email, $password){
        $password = password_hash($password,PASSWORD_BCRYPT);

        try{$sql = "INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)";

        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$firstname,$lastname,$email,$password]);
            echo "$firstname added to db";
    }  catch (Exception $e){
            echo "Failed to add to db";
        }
    }


}