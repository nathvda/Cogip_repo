<?php

namespace App\Validators;

use Exception;
use App\Model\ContactModel;
use App\Controllers\ContactsController;

    class ContactValidator{

        private $data;
        private static $fields = ['name', 'company_id', 'email', 'phone'];
        private $errors =[];

        public function __construct($post_data){
            $this->data = $post_data;
        }

        public function contact_validate(){
            foreach(self::$fields as $field){
                if(!array_key_exists($field, $this->data)){
                    trigger_error("$field does not exist in data");
                    return;
                }
            }

            $this->validateName();
            $this->validateCompany();
            $this->validateEmail();
            $this->validatePhone();

            if(count($this->errors) == 0) {
                try {
                    $idk = new ContactsController();
                    $idk->add($this->data);
                    return $this->data;
                } catch (Exception){
                    return "didn't work";
                }
            } else {
                return $this->errors;
            }

        }

        private function validateName(){
            $val = trim($this->data['name']);
            if(empty($val)){
                $this->addError('name', 'name cannot be empty');
            } else {
                if(!preg_match('/^[s\a-zA-ZÁ-ù]{1,50}$/',$val)){
                    $this->addError('name', 'name can only contain letters');
                } else {
                    $this->data['name'] = $val;
                    }
                }
            }

        private function validateCompany(){
            $val = trim($this->data['company_id']);
            if(empty($val)){
                $this->addError('company_id', 'company cannot be empty');
            } else {
                if(!preg_match('/^[0-9]{1,50}$/',$val)){
                    $this->addError('company_id', 'company ID must be a number');
                } else {
                    $this->data['company_id'] = $val;
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

        private function validatePhone(){
            $val = trim($this->data['phone']);
            if(empty($val)){
                $this->addError('phone', 'phone cannot be empty');
            } else {
                if(!preg_match('/^[0-9]*$/',$val)){
                    $this->addError('phone', 'phone must be in format 0XXX-XXXXXX or +XXXXX-XXXXXX');
                } else {
                    $this->data['phone'] = $val;
                    }
                }
            }

            private function addError($key,$val){
                $this->errors[$key] = $val;
            }

    }



