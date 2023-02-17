<?php
namespace App\Controllers;

use Exception;
use App\Core\DbConnect;
use App\Model\ContactModel;

/**
 * Gère les actions relatives aux personnes de contact
 * add → ajout
 * getInvoice → récupère un élément unique
 * getInvoices → récupère tous les éléments
 * updateInvoice → met à jour les informations d'un élément
 * delete → supprime un élément de la base de donnée.
 */

class ContactsController extends DbConnect{

        /**
     * Crée un contact au moyen des informations renvoyées par le validateur
     * @param array $data → informations renvoyées par le validateur.
     */

    public function add($data){

        (new ContactModel)->createContact($data['name'], intval($data['company_id']), $data['email'], $data['phone']);
        echo $data['name'] . " a bien été ajouté.e à la base de données";

    }

    /**
     * Récupère les informations d'un contact selon son identifiant unique
     * @param int $id → identifiant unique.
     */

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

    /**
     * Récupère toutes les informations des contacts sous format JSON.
     */

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

    /**
     * Mets à jour un contact selon son id et utilise les informations retournées par le validateur.
     * @param int $id → identifiant unique
     * @param array $data → informations renvoyées par le validateur
     */


    public function updateContact($id, $data){

            try{

            (new ContactModel)->editContact($data["name"], intval($data['company_id']), $data['email'], $data['phone'], $id);

            } catch (Exception) {

            }

    }

    /**
     * Supprime un contact selon son id.
     * @param int $id = identifiant unique.
     */

    public function delete($id){

        (new ContactModel)->deleteContact($id);

    }


}

