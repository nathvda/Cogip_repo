<?php
namespace App\Controllers;

use App\Core\DbConnect;
use App\Model\CompaniesModel;

class CompanyController extends DbConnect{

    public function add($data){

        (new CompaniesModel)->createCompany($data['name'],intval($data['type']),$data['country'], $data['tva']);
        echo $data['name'] . " a bien été ajouté à la base de données";
    }

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

    public function updateCompany($id, $data){

        (new CompaniesModel)->editCompany($id, $data['name'],intval($data['type']),$data['country'], $data['tva']);
        echo $data['name'] . " a bien été modifiée";

    }

    public function delete($id){

        (new CompaniesModel)->deleteCompany($id);

    }


}

