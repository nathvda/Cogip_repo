<?php
declare(strict_types=1);

use App\Controllers\UsersController;
use PHPUnit\Framework\TestCase;

final class UsersControllerTest extends TestCase{
    
    public function test_createUser() : void{
        
        $data = ["firstname" => "John", "lastname" => "Smith", "email" => "ekjdkfdsf@dsfk.com", "password" => "idk"];

        $this->assertSame(["firstname" => "John", "lastname" => "Smith", "email" => "ekjdkfdsf@dsfk.com", "password" => "idk"], (new UsersController)->registerUser($data));

    }
} 