<?php
namespace App\Model;

use App\Core\DbConnect;

class CompaniesModel extends DbConnect{

    public function getCompanies(){
        
        $sql = "SELECT companies.*, types.name AS types_id FROM companies INNER JOIN types ON companies.types_id = types.id ORDER BY companies.name ASC";
        
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute();

        $result = $stmt->fetchAll();

        return $result;

    }

    public function createCompany($name,$type,$country,$tva){
        $sql = "INSERT INTO companies (name, types_id, country, tva) VALUES (?,?,?,?)"; 
        
        $stmt =$this->connect()->prepare($sql);
        $stmt->execute([$name,$type,$country,$tva]);

        return "failed";

    }

    public function fetchCompany($id){
        
        $sql = "SELECT companies.*, types.name AS types_id FROM companies INNER JOIN types ON companies.types_id = types.id WHERE companies.id = ?";
        
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$id]);

        $result = $stmt->fetchAll();

        return $result;

    }

    public function editCompany($name,$type,$country,$tva, $id){
        $sql = "UPDATE companies SET name = ?, types_id = ?, country = ?, tva = ?, updated_at = CURRENT_TIMESTAMP() WHERE companies.id = ?"; 
        
        $stmt =$this->connect()->prepare($sql);
        $stmt->execute([$name,$type,$country,$tva,$id]);

    }

    public function deleteCompany($id){
        $sql ="DELETE FROM companies WHERE companies.id = ?";

        $stmt =$this->connect()->prepare($sql);
        $stmt->execute([$id]);
    }

}