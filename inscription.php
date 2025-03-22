<?php

use Pdo\Mysql;

   if(isset($_POST['continuer'])){ //si on clic sur le boutton alors:
      if(!empty($_POST['email']) && !empty($_POST['password'])){
         //nous allons mettre le nom, le prénom, l'email et le mot de passe dans des variables
         $nom = $_POST['name'];
         $prenom = $_POST['prenom'];
         $email  = $_POST['email'];
         $password = $_POST['password'];
         $erreur = null;

         //connexion à la base de données
         $nom_serveur = "localhost";
         $utilisateur = "root";
         $mot_de_passe = "";
         $nom_base_données = "form";
         
         try {
            
            $conn = mysqli_connect($nom_serveur, $utilisateur, $mot_de_passe, $nom_base_données);
            
         } catch (PDOException $e) {
            echo"Erreur :".$e->getMessage();
         }
            
         //requete pour insérer des utilisateurs
         $requete = mysqli_query($conn,"INSERT INTO connexion (nom, prenom, email, mdp) VALUES ('$nom', '$prenom', '$email', '$password')");
         header("Location:INDEX.html");
      }
   }
?>   

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
   <link rel="stylesheet" href="style-inscription.css">
   <link rel="stylesheet" href="style-inscription2.css">
   <link rel="stylesheet" href="style-inscription3.css">
   <link rel="stylesheet" href="style-inscription4.css">

   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    
   
   <title>Page D'inscription</title>
</head>
<body>
   <main>
      <div class="color-right"></div>
      
      <section id="sec1">
         
         <section id="sec1-1">
            
            <div class="logo"></div>
            
            <div class="container">
               <h1>BIENVENUE SUR <br> COREA-GROUP</h1>
               <P class="inscription">Inscription</P>
               <p style="color:red;">
               <?php
                  if(isset($erreur)){
                     echo $erreur;
                  }
               ?>
               </p>
               <form action="" method="post">
                  <input type="text" name="name"  placeholder="Nom" required>
                  <input type="text" name="prenom" placeholder="Prénom" required>
                  <input type="email" name="email"  placeholder="Email" required>
                  <input type="password" name="password" placeholder="Mot de passe" required>
                  <input type="submit" value="Continuer &RightArrow;" name="continuer" id="connexion"></input>
               </form>
               
            </div>
            
            <p>Avez-vous un compte? <a href="connexion.php">connectez-vous</a></p>
         </section>
         
         <section id="sec2"></section>
      
      </section>
      
   </main>
</body>
</html>