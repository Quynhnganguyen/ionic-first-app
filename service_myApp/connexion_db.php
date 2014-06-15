<?php

class CONNEXION_DB {

  function __construct() { 

        $this->connection(); // connexion à la base

    }

   function __destruct() {

        $this->fermer(); // fermer la connexion

   }

 function connection() {

        // connexion à la base

        $connexion = mysql_connect("localhost", "root", "root") or die(mysql_error());

         // selection de la base

        $db = mysql_select_db("myApp") or die(mysql_error()) or die(mysql_error());

        return $connexion;

    }

  function fermer() {

       mysql_close(); //Fermer la connexion

    }

}

?>

