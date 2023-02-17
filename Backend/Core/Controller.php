<?php 

namespace App\Core;

class Controller 
{
    /*
    * @var $view, $data
    * return view
    */
    public function view($view, $data = [])
    {
        extract($data);
        require_once(__ROOT__.'/Resources/views/'.$view.'.php');
    }

    public function show($view)
    {
        extract($data);
        var_dump(extract($data));
        require_once(__ROOT__.'/Resources/views/'.$view.'.php');
    }

}