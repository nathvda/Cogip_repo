<?php
namespace App\Controllers;

use App\Core\DbConnect;
use App\Model\InvoicesModel;
use Exception;

/**
 * Gère les actions relatives aux factures
 * add → ajout
 * getInvoice → récupère un élément unique
 * getInvoices → récupère tous les éléments
 * updateInvoice → met à jour les informations d'un élément
 * delete → supprime un élément de la base de donnée.
 * @return array;
 */

class InvoicesController extends DbConnect{

    public function add($data){

        try { 
        $res = (new InvoicesModel)->createInvoice($data['ref'], $data['date_due'], intval($data['id_company']));
        return $res;
        } catch (Exception $e){
        }
    }

    /** 
     * Generates json data from fetched invoice
     * @param $id : selected id.
     */

    public function getInvoice($id){

        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");

        $result = (new InvoicesModel)->fetchInvoice($id);

        if(count($result) > 0){
            echo json_encode($result);
        } else {
        
            http_response_code(404);
        
            echo json_encode(
                array("message" => "No invoice found")
            );
        
        }

    }

    /**
     * Generates json data from all fetched invoices.
     */

    public function getInvoices(){
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        
        $stmt = new InvoicesModel();
        $stmt = $stmt->getInvoices();
        
        http_response_code(200);
        
        if(count($stmt) > 0){
            echo json_encode($stmt);
        } else {
        
            http_response_code(404);
        
            echo json_encode(
                array("message" => "No invoice found")
            );
        
        }

    }

    /**
     * Sends request to data base for update
     * @param int $id : requested id
     * @param array $data {
     *         @param string ref : reference of the object,
     *         @param date date_due : date of the invoice,
     *         @param int company : company id, must be included from the database. 
     * }
     */

    public function updateInvoice($id, $data){

        (new InvoicesModel)->editInvoice($id, $data['ref'], $data['date_due'], intval($data['company']));
        echo $data['ref'] . " a bien été modifiée";

    }

    /**
     * Deletes a specified invoice from the database
     * @param int $id : requested id
     */

    public function delete($id){

        (new InvoicesModel)->deleteInvoice($id);

    }


}

