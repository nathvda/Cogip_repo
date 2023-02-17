<?php
declare(strict_types=1);

use App\Controllers\CompanyController;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;

final class CompanyControllerTest extends TestCase
{
    #[DataProvider('infos')]
    public function testAdd(String $a , int $b, String $c, int $d, String $expected) : void
    {
        $payload["name"] = $a;
        $payload["type"] = $b;
        $payload["country"] = $c;
        $payload["tva"] = $d;

        $this->assertSame($expected, (new CompanyController())->add($payload));
        
    }

    public static function infos(): array{
        return [
            'Should work' => ["John",1,"Egypt", 450540540, "John a bien été ajouté à la base de données"],
            'Should work too' => ["name" => "Johnny", "type" => 1, "country" => "Egypt", "tva" => 450540654, "Johnny a bien été ajouté à la base de données"],
            'Should work too again' => ["Marie-Louise" => "Johnny", "type" => 1, "country" => "Egypt", "tva" => 46504654050, "Marie-Louise a bien été ajouté à la base de données"]
        ];
    }

}