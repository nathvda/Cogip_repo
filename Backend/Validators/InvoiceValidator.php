<?php
declare(strict_types=1);

namespace App\Validators;

use Exception;
use App\Model\CompaniesModel;
use App\Controllers\InvoicesController;

class InvoiceValidator {

      private $data;
      private static $fields = ['ref', 'date_due', 'id_company'];
      private $errors = [];

      public function __construct($post_data){
            $this->data = $post_data;
      }

      public function invoice_validate(){
            foreach(self::$fields as $field){
                  if (!array_key_exists($field, $this->data)){
                        trigger_error("$field does not exist in data");
                        return;
                  }
            }

            $this->validateRef();
            $this->validateDate();
            $this->validateCompany();

            if(count($this->errors) == 0) {
                  try {

                  $idk = new InvoicesController();
                  $idk->add($this->data);

                  return $this->data;

                  } catch (Exception){

                  return "didn't work";

                  }
            } else {

            return $this->errors;

            }
      }

      private function validateRef(){
            $val = trim($this->data['ref']);
            $val = htmlspecialchars($val);
            $val = stripslashes($val);
            
            if(empty($val)){
                  $this->addError('ref', 'reference cannot be empty');
            } else {
                  if(!preg_match('/^F[0-9]{8}-[0-9]{3}$/', $val)){ 
                        $this->addError('ref', 'reference must be in format "FXXXXXXXX-XXX"');
                  } else {
                        $this->data['ref'] = $val;
                  }
            }
      }

      private function validateDate(){

            /**
             * Sanitizes
             */

            $val = trim($this->data['date_due']);
            $val = htmlspecialchars($val);
            $val = stripslashes($val);

            /**
             * Validates 
             */

            if (empty($val)){

                  $this->addError('date_due', 'due date cannot be empty');

            } else {

                  if(!preg_match('/^\d{4}-\d{2}-\d{2}$/',$val)){

                  $this->addError('date_due', 'due date must be in format YYYY-MM-DD');

                  } else {

                  $this->data['date_due'] = $val;

                  }
            }

      }

      private function validateCompany(){
            $val = $this->data['id_company'];
            
            $result = (new CompaniesModel)->fetchCompany($val);
            
            if (count($result) > 0){
                  $this->data['id_company'] = $val;
            } else {
                  $this->addError('id_company', "l'entreprise companie n'existe pas");
            }


      }

      private function addError($key, $value){
            $this->errors[$key] = $value;
      }

}
