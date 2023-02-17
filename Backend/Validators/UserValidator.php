<?php

namespace App\Validators;

use Exception;
use App\Model\UsersModel;
use App\Controllers\UsersController;

    class UserValidator{

        private $data;
        private static $fields = ['firstname', 'lastname', 'email', 'password'];
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
            $this->validateLastName();
            $this->validateEmail();
            $this->validatePassword();

            if(count($this->errors) == 0) {
                try {
                    $idk = new UsersController();
                    $idk->add($this->data);
                    return $this->data;
                } catch (Exception){
                    return "didn't work";
                }
            } else {
                return $this->errors;
            }

        }

        private function validateFirstName(){
            $val = trim($this->data['firstname']);
            if(empty($val)){
                $this->addError('firstname', 'first name cannot be empty');
            } else {
                if(!preg_match('/^[\sa-zA-ZÁ-ù-]{1,50}$/',$val)){
                    $this->addError('firstname', 'first name can only contain letters');
                } else {
                    $this->data['firstname'] = $val;
                }
            }
        }

        private function validateLastName(){
            $val = trim($this->data['lastname']);
            if(empty($val)){
                $this->addError('lastname', 'last name cannot be empty');
            } else {
                if(!preg_match('/^[-\sa-zA-ZÁ-ù]{1,50}$/',$val)){
                    $this->addError('lastname', 'last name can only contain letters');
                } else {
                    $this->data['lastname'] = $val;
                }
            }

        }

        private function validateEmail(){
            $val = trim($this->data['email']);
            if(empty($val)){
                $this->addError('email', 'email cannot be empty');
            } else {
                if(!filter_var($val, FILTER_VALIDATE_EMAIL)){
                    $this->addError('email', 'email should be a valid email address');
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
                if(!preg_match('/^[a-zA-Z0-9]{1,50}$/',$val)){
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



