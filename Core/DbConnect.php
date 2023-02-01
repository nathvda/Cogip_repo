<?php
namespace App\Core;

use Dotenv\Dotenv;
use App\Database\PDO;

class DbConnect{

    private $host;
    private $dbname;
    private $password;
    private $username;

    public function __construct(){
        $this->host = $_ENV['HOST'];
        $this->dbname = $_ENV['DBNAME'];
        $this->password = $_ENV['PASSWORD'];
        $this->username = $_ENV['USERNAME'];
    }

    public function connect(){

        $bdd = new \PDO("mysql:host=$this->host;dbname=$this->dbname", "$this->username", "$this->password");
        $bdd->setAttribute(\PDO::ATTR_DEFAULT_FETCH_MODE,\PDO::FETCH_ASSOC);  
        
        var_dump("Connecté à la base de données");
        
        return $bdd;

    }


}
