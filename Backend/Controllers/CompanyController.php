<?php
namespace App\Controllers;

use App\Core\DbConnect;
use App\Model\CompaniesModel;
use Exception;

/**
 * Gère les actions relatives aux entreprises
 * add → ajout
 * getInvoice → récupère un élément unique
 * getInvoices → récupère tous les éléments
 * updateInvoice → met à jour les informations d'un élément
 * delete → supprime un élément de la base de donnée.
 */

class CompanyController extends DbConnect{

    /**
     * Crée une entreprise au moyen des informations renvoyées par le validateur
     * $data → informations renvoyées par le validateur.
     */

    public function add($data){

        try{ 
        $res = (new CompaniesModel)->createCompany($data['name'],intval($data['type']),$data['country'], $data['tva']);
        
        return $res;
        
        } catch (Exception) {

        return "Did not work";

        }
    }

    /**
     * Récupère les informations d'une entreprise selon son identifiant unique
     * $id → identifiant unique.
     */

    public function getCompany($id){

        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");

        $result = (new CompaniesModel)->fetchCompany($id);

        if(count($result) > 0){

            http_response_code(200);
            
            echo json_encode($result);

        } else {
        
            http_response_code(404);
        
            echo json_encode(
                array("message" => "No company found")
            );
        
        }

    }

    /**
     * Récupère toutes les informations des entreprises sous format JSON.
     */

    public function getCompanies(){
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        
        $stmt = (new CompaniesModel())->getCompanies();
        
        if(count($stmt) > 0){

            http_response_code(200); 
            
            echo json_encode($stmt);
        } else {
        
            http_response_code(404);
        
            echo json_encode(
                array("message" => "No company found")
            );
        
        }

    }

    /**
     * Mets à jour une entreprise selon son id et utilise les informations retournées par le validateur.
     * $id → id de l'entreprise
     * $data → informations renvoyées par le validateur
     */

    public function updateCompany($id, $data){

        (new CompaniesModel)->editCompany($data['name'],intval($data['type']),$data['country'], $data['tva'], $id);
        echo $data['name'] . " a bien été modifiée";

    }

    /**
     * Supprime une entreprise selon son id.
     * $id = id de l'entreprise
     */

    public function delete($id){

        (new CompaniesModel)->deleteCompany($id);

    }


}

