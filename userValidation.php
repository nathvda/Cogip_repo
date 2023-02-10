<?php

//include []

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    class userValidation{ //<-extends []

        private $data;
        private static $fields = ['id', 'first_name', 'role_id', 'last_name', 'email', 'password'];
        private $errors =[];

        public function __construct($post_data){
            $this->data = $post_data;
        }

        public function userValidation(){
            foreach(self::$fields as $field){
                if(!array_key_exists($field, $this->data)){
                    trigger_error("$field is not present in data");
                    return;
                }
            }

            $this->firstNameValidation();
            $this->roleValidation();
            $this->lastNameValidation();
            $this->emailValidation();
            $this->passwordValidation();
            return $this->errors;
        }

        private function firstNameValidation(){
            $val = trim($this->data['first_name']);
            if(empty($val)){
                $this->addError('first_name', 'no name error message');
            } else {
                if(!preg_match('/^[-\sa-zA-ZÁ-ù:]{1, 50}*$/',$val)){
                    $this->add_error('first_name', 'bad name error message');
                } else {
                    $this->data['first_name'] = $val;
                }
            }
        }

        private function roleValidation(){
            $val = trim($this->data['role_id']);
            if(empty($val)){
                $this->addError('role_id', 'no role error message');
            } else {
                if(!preg_match('/^[0-9]*$/',$val)){
                    $this->add_error('role_id', 'bad role error message');
                } else {
                    $this->data['role_id'] = $val;
                }
            }

        }

        private function lastNameValidation(){
            $val = trim($this->data['last_name']);
            if(empty($val)){
                $this->addError('last_name', 'no name error message');
            } else {
                if(!preg_match('/^[-\sa-zA-ZÁ-ù:]{1, 50}*$/',$val)){
                    $this->add_error('last_name', 'bad name error message');
                } else {
                    $this->data['first_name'] = $val;
                }
            }

        }

        private function emailValidation(){
            $val = trim($this->data['email']);
            if(empty($val)){
                $this->addError('email', 'no email error message');
            } else {
                if(!filter_var($val, FILTER_VALIDATE_EMAIL)){
                    $this->add_error('first_name', 'bad email error message');
                } else {
                    $this->data['email'] = $val;
                }
            }
        }

        private function passwordValidation(){
            $val = trim($this->data['password']);
            if(empty($val)){
                $this->addError('password', 'no password error message');
            } else {
                if(!preg_match('/^[-a-zA-Z0-9]{1, 50}*$/',$val)){
                    $this->add_error('password', 'bad password error message');
                } else {
                    $this->data['password'] = $val;
                }
            }

        }//!preg_match('/^[-\sa-zA-ZÁ-ù0-9:]{1, 50}*$/',$val)
    
        private function addError($key,$val){
            $this->errors[$key] = $val;
        }

    }

}


//id, first_name, roles_id, last_name, email, password


