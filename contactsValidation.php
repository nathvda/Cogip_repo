<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    class contactsValidation{

        private $data;
        private static $fields = ['id', 'name', 'company_id', 'email', 'phone'];
        private $errors =[];

        public function __construct($post_data){
            $this->data = $post_data;
        }

        public function contactValidation(){
            foreach(self::$fields as $field){
                if(!array_key_exists($field, $this->data)){
                    trigger_error("$field is not present in data");
                    return;
                }
            }

            $this->nameValidation();
            $this->companyValidation();
            $this->emailValidation();
            $this->phoneValidation();
            return $this->errors;
        }

        private function validateName(){
            $val = trim($this->data['name']);
            if(empty($val)){
                $this->addError('name', 'no name error message');
            } else {
                if(!preg_match('/^[a-zA-ZÁ-ù]{1, 50}*$/',$val)){ //check ex
                    $this->add_error('name', 'bad name error message');
                } else {
                    $this->data['name'] = $val;
                    }
                }
            }

        private function validateCompany(){
            $val = trim($this->data['name']);
            if(empty($val)){
                $this->addError('name', 'no name error message');
            } else {
                if(!preg_match('/^[-\sa-zA-ZÁ-ù0-9:]{1, 50}*$/',$val)){ //check ex
                    $this->add_error('name', 'bad name error message');
                } else {
                    $this->data['name'] = $val;
                    }
                }
            }

        private function validateEmail(){
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

        private function validatePhone(){
            $val = trim($this->data['phone']);
            if(empty($val)){
                $this->addError('phone', 'no phone error message');
            } else {
                if(!preg_match('/^[0-9]{10}*$/',$val)){ //check ex
                    $this->add_error('phone', 'bad phone error message');
                } else {
                    $this->data['phone'] = $val;
                    }
                }
            }

    }
}


