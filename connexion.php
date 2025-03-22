
<?php

use Pdo\Mysql;

   if(isset($_POST['valider'])){ //si on clic sur le boutton alors:
      //nous allons vérifier les informations du formulaire
      if(!empty($_POST['email']) && !empty($_POST['password'])){//on vérifie ici si l'utilisateur a rentré des informations
         //nous allons mettre l'email et le mot de passe dans des variables
         $email  =  $_POST['email'];
         $password = $_POST['password'];
         $erreur = null;
       //nous allons vérifier si les informations entrées sont correctes
         //connexion à la base de données
         $nom_serveur = "localhost";
         $utilisateur = "root";
         $mot_de_passe = "";
         $nom_base_données = "form";
         $conn = mysqli_connect($nom_serveur, $utilisateur, $mot_de_passe, $nom_base_données);
            
         //requete pour selectionner l'utilisateur qui a pour email et mot de passe les identifiants qui ont été rentrés
         $requete = mysqli_query($conn, "SELECT * FROM connexion WHERE email ='$email' AND mdp = '$password' ");
         $num_ligne = mysqli_num_rows($requete); //compter le nombres de lignes ayant rapport à la requete SQL
         if($num_ligne > 0){
            header("Location:INDEX.html"); //si le nombre de ligne est > 0, on le redirige vers la page COREA CENTER
         }else{ //s'il n'y a pas de correspondance
            $erreur = "Adresse Mail ou Mot de passe incorrect";
         }
      }else{
         $erreur = "veuillez remplir tous les champs";
      }
   }
?>      

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="style-connexion.css">
   <link rel="stylesheet" href="style-connexion2.css">
   <link rel="stylesheet" href="style-connexion3.css">
   <link rel="stylesheet" href="style-connexion4.css">
   
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    
   <title>Page De Connexion Corea</title>
</head>
<body>
   
   <main>
      <div class="color-right"></div>
      
      <section id="sec1">
         
         <section id="sec1-1">
         
            <div class="logo"></div>
            
            <div class="container">
               <h1>BIENVENUE SUR <br>COREA-GROUP</h1>
                  
               <P class="connexion">Connexion</P>

               <p style="color:red;">
               <?php
                  if(isset($erreur)){
                     echo $erreur;
                  }
               ?>
               </p>
               
               <form action="" method="POST">
                  <input type="email" name="email" placeholder="Email">
                  <input type="password" name="password" placeholder="Mot de passe">
                  <input type="submit" value="Connexion &RightArrow; " name="valider" id="connexion"></input>
               </form>
              
            </div>
            
            <p>Vous n'avez pas de compte? <a href="inscription.php" target="_parent">Inscrivez-vous</a></p>
         </section>
         
         <section id="sec2"></section>
      
      </section>
      
   </main>
</body>
</html>