<?php
namespace App\Model;

use App\Core\DbConnect;

class InvoicesModel extends DbConnect{

    public function getInvoices(){
        
        $sql = "SELECT invoices.*, companies.name AS id_company FROM invoices INNER JOIN companies ON invoices.id_company = companies.id ORDER BY created_at DESC";
        
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute();

        $result = $stmt->fetchAll();

        return $result;


    }

    public function createInvoice($ref,$date,$companyid){
        $sql = "INSERT INTO invoices (ref, date_due, id_company) VALUES (?,?,?)"; 
        
        $stmt =$this->connect()->prepare($sql);
        $stmt->execute([$ref,$date,$companyid]);

    }

    public function fetchInvoice($id){
        
        $sql = "SELECT invoices.*, companies.name AS id_company FROM invoices INNER JOIN companies ON invoices.id_company = companies.id WHERE invoices.id = ?";
        
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$id]);

        $result = $stmt->fetchAll();

        return $result;

    }

    public function editInvoice($id, $ref,$date,$companyid){
        $sql = "UPDATE invoices SET ref = ?, date_due = ?, id_company = ? WHERE invoices.id = ?"; 
        
        $stmt =$this->connect()->prepare($sql);
        $stmt->execute([$ref,$date,$companyid,$id]);

    }

    public function deleteInvoice($id){
        $sql ="DELETE FROM invoices WHERE invoices.id = ?";

        $stmt =$this->connect()->prepare($sql);
        $stmt->execute([$id]);
    }
}