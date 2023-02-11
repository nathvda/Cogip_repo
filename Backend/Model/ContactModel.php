<?php
namespace App\Model;

use App\Core\DbConnect;
use Exception;

class ContactModel extends DbConnect{

    public function getContacts(){
        
        $sql = "SELECT contacts.*, companies.name AS company_id FROM contacts INNER JOIN companies ON contacts.company_id = companies.id ORDER BY contacts.name ASC";
        
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute();

        $result = $stmt->fetchAll();

        return $result;


    }

    public function createContact($name,$comp_id,$mail,$phone){
        
        
        $sql = "INSERT INTO contacts (name, company_id, email, phone) VALUES (?,?,?,?)"; 
        
        $stmt =$this->connect()->prepare($sql);
        $stmt->execute([$name,$comp_id,$mail,$phone]);

    }

    public function fetchContact($id){
        
        $sql = "SELECT contacts.*, companies.name AS company_id FROM contacts INNER JOIN companies ON contacts.company_id = companies.id WHERE contacts.id = ?";
        
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$id]);

        $result = $stmt->fetchAll();

        return $result;

    }

    public function editContact($name,$comp_id,$mail,$phone,$id){
    
        $sql = "UPDATE contacts SET name = ?, company_id = ?, email = ?, phone = ?, updated_at = CURRENT_TIMESTAMP() WHERE contacts.id = ?"; 
        
        $stmt =$this->connect()->prepare($sql);
        $stmt->execute([$name,$comp_id,$mail,$phone,$id]);

    }

    public function deleteContact($id){
        $sql ="DELETE FROM contacts WHERE contacts.id = ?";

        $stmt =$this->connect()->prepare($sql);
        $stmt->execute([$id]);
    }
}