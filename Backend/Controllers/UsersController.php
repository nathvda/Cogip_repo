<?php
namespace App\Controllers;
use Exception;
use App\Core\DbConnect;
use App\Model\UsersModel;
use Firebase\JWT\JWT;

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

            $user = $res[0]['id'];
            $key = $_ENV["SECRET"];
            $token = [
                'user_id' => $user,
                'user_first' => $res[0]['first_name'],
                'user_last' => $res[0]['last_name'],
                'role' => $res[0]['role_id'],
                'exp' => time() + 2400
            ];


            $token = JWT::encode($token,$key, 'HS256');

            echo json_encode(['token' => $token]);

            } else { 

                var_dump("wrong credentials");
            }
}
        catch (Exception $e){
            return $e;
        }
    }

    public function checkToken(string $token,string $secret) : bool
    {

        $header = $this->getHeaders($token);
        $payload = $this->getPayload($token);
        $token = $header + $payload;
        
        $verifToken = JWT::encode($header, $secret, 'HS256');

        return $verifToken === $token;

    }

    private function getHeaders(string $token){

        $array = explode('.',$token);

        $header = (array) json_decode(base64_decode($array[0], true));

        return $header;

    }

    private function getPayload(string $token){

        $array = explode('.',$token);

        $payload = (array) json_decode(base64_decode($array[1], true));

        return $payload;

    }


}

