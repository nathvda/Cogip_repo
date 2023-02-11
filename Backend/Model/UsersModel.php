<?php
namespace App\Model;

use Exception;
use App\Core\DbConnect;

class UsersModel extends DbConnect{

    public function createUser($firstname, $lastname, $email, $password){
        
        try{

        $password = password_hash($password, PASSWORD_BCRYPT);
            
        $sql = "INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)";

        $stmt = $this->connect()->prepare($sql);

        $stmt->execute([$firstname,$lastname,$email,$password]);

            echo "$firstname added to db";

    }  catch (Exception $e){

            echo "Failed to add to db";

        }
    }

    public function checkUser($email){
        
        try{
                        
        $sql = "SELECT * FROM users WHERE email = ?";

        $stmt = $this->connect()->prepare($sql);

        $stmt->execute([$email]);

        $res = $stmt->fetchAll();

        return $res;

    }  catch (Exception $e){

            echo "Failed to add to db";

        }
    }


}