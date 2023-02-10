<?php

namespace App\Validators;

use Exception;
use App\Model\UsersModel;
use App\Controllers\UsersController;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    class UserValidator{

        private $data;
        private static $fields = ['id', 'first_name', 'role_id', 'last_name', 'email', 'password'];
        private $errors =[];

        public function __construct($post_data){
            $this->data = $post_data;
        }

        public function user_validate(){
            foreach(self::$fields as $field){
                if(!array_key_exists($field, $this->data)){
                    trigger_error("$field does not exist in data");
                    return;
                }
            }

            $this->validateFirstName();
            $this->validateRole();
            $this->validateLastName();
            $this->validateEmail();
            $this->validatePassword();

            if(count($this->errors) == 0) {
                try {
                    $idk = new UsersController();
                    $idk = add($this->data);
                    return $this->data;
                } catch (Exception){
                    return "didn't work";
                }
            } else {
                return $this->errors;
            }

        }

        private function validateFirstName(){
            $val = trim($this->data['first_name']);
            if(empty($val)){
                $this->addError('first_name', 'first name cannot be empty');
            } else {
                if(!preg_match('/^[-\sa-zA-ZÁ-ù:]{1, 50}*$/',$val)){
                    $this->addError('first_name', 'first name can only contain letters');
                } else {
                    $this->data['first_name'] = $val;
                }
            }
        }

        private function validateRole(){
            $val = trim($this->data['role_id']);
            if(empty($val)){
                $this->addError('role_id', 'role cannot be empty');
            } else {
                if(!preg_match('/^[0-9]*$/',$val)){
                    $this->addError('role_id', 'role ID should be a number');
                } else {
                    $this->data['role_id'] = $val;
                }
            }

        }

        private function validateLastName(){
            $val = trim($this->data['last_name']);
            if(empty($val)){
                $this->addError('last_name', 'last name cannot be empty');
            } else {
                if(!preg_match('/^[-\sa-zA-ZÁ-ù:]{1, 50}*$/',$val)){
                    $this->addError('last_name', 'last name can only contain letters');
                } else {
                    $this->data['last_name'] = $val;
                }
            }

        }

        private function validateEmail(){
            $val = trim($this->data['email']);
            if(empty($val)){
                $this->addError('email', 'email cannot be empty');
            } else {
                if(!filter_var($val, FILTER_VALIDATE_EMAIL)){
                    $this->addError('first_name', 'email should be a valid email address');
                } else {
                    $this->data['email'] = $val;
                }
            }
        }

        private function validatePassword(){
            $val = trim($this->data['password']);
            if(empty($val)){
                $this->addError('password', 'password cannot be empty');
            } else {
                if(!preg_match('/^[-a-zA-Z0-9]{1, 50}*$/',$val)){
                    $this->addError('password', 'password must be between 1 and 50 alphanumeric characters');
                } else {
                    $this->data['password'] = $val;
                }
            }

        }
    
        private function addError($key,$val){
            $this->errors[$key] = $val;
        }

    }

}


