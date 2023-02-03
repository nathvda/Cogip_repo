<?php
namespace App\Controllers;

use App\Core\DbConnect;
use App\Model\ContactModel;

class ContactsController extends DbConnect{

    public function add($data){

        (new ContactModel)->createContact($data['name'], intval($data['company_id']), $data['email'], $data['phone']);
        echo $data['name'] . " a bien été ajouté.e à la base de données";

    }

    public function getContact($id){

        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");

        $result = (new ContactModel)->fetchContact($id);

        if(count($result) > 0){
            echo json_encode($result);
        } else {
        
            http_response_code(404);
        
            echo json_encode(
                array("message" => "No contact found")
            );
        
        }

    }

    public function getContacts(){
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        
        $stmt = new ContactModel();
        $stmt = $stmt->getContacts();
        
        http_response_code(200);
        
        if(count($stmt) > 0){
            echo json_encode($stmt);
        } else {
        
            http_response_code(404);
        
            echo json_encode(
                array("message" => "No contact found")
            );
        
        }

    }

    public function updateContact($id, $data){

        (new ContactModel)->editContact($id, $data['name'], intval($data['company_id']), $data['email'], $data['phone']);
        echo $data['name'] . " a bien été modifiée";

    }

    public function delete($id){

        (new ContactModel)->deleteContact($id);

    }


}

