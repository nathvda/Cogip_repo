<?php
namespace App\Routes;

use Bramus\Router\Router;

use App\Controllers\HomeController;
use App\Controllers\CompanyController;
use App\Controllers\ContactsController;
use App\Controllers\UsersController;
use App\Controllers\InvoicesController;

use App\Validators\CompanyValidator;
use App\Validators\ContactValidator;
use App\Validators\InvoiceValidator;
use App\Validators\UserValidator;


$router = new Router();

$router->get('/', function() {
    (new HomeController)->index();
});

/** 
 * Route d'accès aux entreprises.
 * → /companies → toutes les entreprises.
 * → /companies/{id}, ex: /companies/1 → accès à l'entreprise numéro 1.
 * → /companies/add → ajout d'une entreprise.
 * → /companies/{id}/edit, ex: /companies/1/edit → edit d'une entreprise, accepte GET (pour récupérer les infos) et PUT (pour modifier les infos);
 */

 //! Starting Route protection stuff

// $router->before('POST|PUT|DELETE', '/companies', function() {
//     if (!isset($_SESSION['user'])) {
//         header('location: http://localhost:5174/');
//         exit();
//     }
// });

// $router->before('POST|PUT|DELETE', '/invoices', function() {
//     if (!isset($_SESSION['user'])) {
//         header('location: http://localhost:5174/');
//         exit();
//     }
// });

// $router->before('POST|PUT|DELETE', '/contacts', function() {
//     if (!isset($_SESSION['user'])) {
//         header('location: http://localhost:5174/');
//         exit();
//     }
// });

// $router->before('POST|PUT|DELETE', '/companies/.*', function() {
//     if (!isset($_SESSION['user'])) {
//         header('location: http://localhost:5174/');
//         exit();
//     }
// });

// $router->before('POST|PUT|DELETE', '/invoices/.*', function() {
//     if (!isset($_SESSION['user'])) {
//         header('location: http://localhost:5174/');
//         exit();
//     }
// });

// $router->before('POST|PUT|DELETE', '/contacts/.*', function() {
//     if (!isset($_SESSION['user'])) {
//         header('location: http://localhost:5174/');
//         exit();
//     }
// });

$router->mount('/companies', function() use ($router){


$router->get('/', function() { 
    (new CompanyController)->getCompanies();
});

$router->get('/{companyid}', function($companyid) { 
    (new CompanyController)->getCompany($companyid);
});

$router->get('/{companyid}/edit', function($companyid) { 
    (new CompanyController)->getCompany($companyid);
});

$router->put('/{companyid}/edit', function($companyid) {
    $payload = json_decode(file_get_contents('php://input'), true); 
    (new CompanyController)->updateCompany($companyid, $payload);
});

$router->post('/add', function() { 
    $payload = json_decode(file_get_contents('php://input'), true);
    $res = (new CompanyValidator($payload))->company_validate();
});

$router->delete('/{companyid}/delete', function($companyid) { 
    echo $companyid;
    (new CompanyController)->delete($companyid);
});

});

/** 
 * Route d'accès aux factures.
 * → /invoices → toutes les factures.
 * → /invoices/{id}, ex: /invoices/1 → accès à la facture numéro 1.
 * → /invoices/add → ajout d'une facture.
 * → /invoices/{id}/edit, ex: /invoices/1/edit → edit d'une facture, accepte GET (pour récupérer les infos) et PUT (pour modifier les infos);
 */

$router->mount('/invoices', function() use ($router){

    $router->get('/', function() { 
        (new InvoicesController)->getInvoices();
    });

    $router->get('/{invoiceid}', function($invoiceid) { 
        (new InvoicesController)->getInvoice($invoiceid);
    });

    $router->get('/{invoiceid}/edit', function($invoiceid) { 
        (new InvoicesController)->getInvoice($invoiceid);
    });

    $router->put('/{invoiceid}/edit', function($invoiceid) { 
        $payload = json_decode(file_get_contents('php://input'), true);
        (new InvoicesController)->updateInvoice($invoiceid, $payload);
    });    

    $router->post('/add', function() { 
        $payload = json_decode(file_get_contents('php://input'), true);
        $res = (new InvoiceValidator($payload))->invoice_validate();
    });

    $router->delete('/{invoiceid}/delete', function($invoiceid) { 
        (new InvoicesController)->delete($invoiceid);
    });
});

/** 
 * Route d'accès aux contacts.
 * → /contacts → toutes les contacts.
 * → /contacts/{id}, ex: /contacts/1 → accès au contact numéro 1.
 * → /contacts/add → ajout d'un contact.
 * → /contacts/{id}/edit, ex: /contacts/1/edit → edit d'un contact, accepte GET (pour récupérer les infos) et PUT (pour modifier les infos);
 */

$router->mount('/contacts', function() use ($router){

    $router->get('/', function() { 
        (new ContactsController)->getContacts();
    });

    $router->get('/{contactid}', function($contactid) { 
        (new ContactsController)->getContact($contactid);
    });

    $router->get('/{contactid}/edit', function($contactid) { 
        (new ContactsController)->getContact($contactid);
    });

    $router->put('/{contactid}/edit', function($contactid) { 
        $payload = json_decode(file_get_contents('php://input'), true);
        (new ContactsController)->updateContact($contactid, $payload);
    });

    $router->post('/add', function() { 
        $payload = json_decode(file_get_contents('php://input'), true);
        $res = (new ContactValidator($payload))->contact_validate();
    });

    $router->delete('/{contactid}/delete', function($contactid) { 
        (new ContactsController)->delete($contactid);
    });

});

$router->mount('/register', function() use ($router){

    $router->post('/', function(){
        $payload = json_decode(file_get_contents('php://input'), true);
        $res = (new UserValidator($payload))->user_validate();
    });
}
);

$router->mount('/login', function() use ($router){

    $router->post('/', function(){
        $payload = json_decode(file_get_contents('php://input'), true);
        $res = (new Userscontroller)->login($payload);
    });
}
);


$router->mount('/logout', function() use ($router){

    $router->get('/', function(){
        echo "This will be the logout function";

    });
    
});

$router->run();