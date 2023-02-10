<?php

namespace App\Validators;

use Exception;
use App\Model\CompaniesModel;
use App\Controllers\CompanyController;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    class CompanyValidator {
        private $data;
        private static $fields = ['id', 'name', 'type_id', 'country', 'tva'];
        private $errors =[];

        public function __construct($post_data){
            $this->data = $post_data;
        }
    
        public function company_validate(){
        foreach(self::$fields as $field){
            if(!array_key_exists($field, $this->data)){
                trigger_error("$field does not exist in data");
                return;
            }
        }

            $this->validateName();
            $this->validateType();
            $this->validateCountry();
            $this->validateTva();

            if(count($this->errors) == 0) {
                try {
                    $idk = new CompanyController();
                    $idk = add($this->data);
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
            if(!preg_match('/^[a-zA-ZÁ-ù0-9:]{1, 50}*$/',$val)){
                $this->addError('name', 'name must be between 1 and 50 alphanumeric characters');
            } else {
                $this->data['name'] = $val;
                }
            }
        }

    private function validateType(){
        $val = trim($this->data['type_id']);
        if(empty($val)){
            $this->addError('type_id', 'type cannot be empty');
        } else {
            if(!preg_match('/^[0-9]{1, 50}*$/',$val)){ //check ex
                $this->addError('type_id', 'type must be a number');
            } else {
                $this->data['type_id'] = $val;
                }
            }
        }

    private function validateCountry(){
        $val = trim($this->data['country']);
        if(empty($val)){
            $this->addError('country', 'country cannot be empty');
        } else {
            if(!preg_match('/^[a-zA-Z]{1, 50}*$/',$val)){
                $this->addError('country', 'country can only contain letters');
            } else {
                $this->data['country'] = $val;
                }
            }
    }


    private function validateTva(){
        $val = trim($this->data['tva']);
        if(empty($val)){
            $this->addError('tva', 'tva cannot be empty');
        } else {
            if(!preg_match('/^[a-zA-Z0-9]{1, 50}*$/',$val)){
                $this->addError('tva', 'tva must be between 1 and 50 alphanumeric characters');
            } else {
                $this->data['tva'] = $val;
                }
            }
        }

        private function addError($key,$val){
            $this->errors[$key] = $val;
        }

    }

}




