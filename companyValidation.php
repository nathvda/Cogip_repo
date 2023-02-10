<?php

//include []

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    class companyValidation {
        private $data;
        private static $fields = ['id', 'name', 'type_id', 'country', 'tva'];
        private $errors =[];

        public function __construct($post_data){
            $this->data = $post_data;
        }
    
        public function companyValidation(){
        foreach(self::$fields as $field){
            if(!array_key_exists($field, $this->data)){
                trigger_error("$field is not present in data");
                return;
            }
        }

            $this->nameValidation();
            $this->typeValidation();
            $this->countryValidation();
            $this->tvaValidation();
            return $this->errors;
        }

    private function nameValidation(){
        $val = trim($this->data['name']);
        if(empty($val)){
            $this->addError('name', 'no name error message');
        } else {
            if(!preg_match('/^[a-zA-ZÁ-ù0-9:]{1, 50}*$/',$val)){ //check ex
                $this->add_error('name', 'bad name error message');
            } else {
                $this->data['name'] = $val;
                }
            }
        }

    private function typeValidation(){
        $val = trim($this->data['type_id']);
        if(empty($val)){
            $this->addError('type_id', 'no type error message');
        } else {
            if(!preg_match('/^[0-9]{1, 50}*$/',$val)){ //check ex
                $this->add_error('type_id', 'bad type error message');
            } else {
                $this->data['type_id'] = $val;
                }
            }
        }

    private function countryValidation(){
        $val = trim($this->data['country']);
        if(empty($val)){
            $this->addError('country', 'no country error message');
        } else {
            if(!preg_match('/^[a-zA-Z]{1, 50}*$/',$val)){
                $this->add_error('country', 'bad country error message');
            } else {
                $this->data['country'] = $val;
                }
            }
    }


    private function tvaValidation(){
        $val = trim($this->data['tva']);
        if(empty($val)){
            $this->addError('tva', 'no tva error message');
        } else {
            if(!preg_match('/^[0-9]{1, 50}*$/',$val)){
                $this->add_error('tva', 'bad tva error message');
            } else {
                $this->data['tva'] = $val;
                }
            }
        }


    }

}




