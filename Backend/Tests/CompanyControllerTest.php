<?php
declare(strict_types=1);

use App\Controllers\CompanyController;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;

final class CompanyControllerTest extends TestCase
{
    #[DataProvider('infos')]
    public function testAdd(String $a , int $b, String $c, String $d, String $expected) : void
    {
        $_POST[] = $a;
        $_POST[] = $b;
        $_POST[] = $c;
        $_POST[] = $d;

        $this->assertSame($expected, (new CompanyController())->add($_POST));
        
    }

    public static function infos(): array{
        return [
            'Should work' => ["name" => "John", "type" => 1, "country" => "Egypt", "tva" => "ODKSDQQSD","John a bien été ajouté à la base de données"],
            'Should work too' => ["name" => "Johnny", "type" => 1, "country" => "Egypt", "tva" => "ODKSDQQSD", "Johnny a bien été ajouté à la base de données"],
            'Should work too again' => ["Marie-Louise" => "Johnny", "type" => 1, "country" => "Egypt", "tva" => "ODKSDQQSD", "Marie-Louise a bien été ajouté à la base de données"]
        ];
    }

}