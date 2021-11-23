// Assignment Code
//Global Variables declared a top of document
var generateButton = document.querySelector("#generate");
var minusculas = "abcdefghijklmnopqrstuvwxyz";
var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeros = "0123456789";
var caracteresEspeciales = "{}[]@!:;#&$%<>¿?/()+-*";

//Declared variables empty, to later be used in functions inside Main function
var minusculasPrueba;
var longitudContra;
var mayusculasPrueba;
var numerosPrueba;
var caracteresEspecialesPrueba;

//Function to know the length of the password inputted by the user

function contraseña(){
  longitudContra = prompt("Write down the amount of characters to set to your password");

  //wrote a basic if to determine if the user inputs less than 8 or more than 128 characters. Prompting a message if the requirement isnt met. 
  if(longitudContra < 8){
    confirm("The password has to be 8 or more characters!");
    contraseña();
  }else if(longitudContra > 128){
    confirm("The password cannot have more than 128 characters");
    contraseña();
  }else if(isNaN(longitudContra)){ //Added this extra else if, so that if the user doesnt write a number, will get this prompt.
    confirm("Write down a number not a letter please :D");
    contraseña();
  }else{
    confirm("You must accept or decline the next password criteria!");
  }
  return longitudContra; //Returns the value stored by user input at the beginning. 
}

//Function to know if the users wants lowercase
function minus(){
  minusculasPrueba = confirm("Allow Lowercase characters in Password?");

  //Declared if to determine if user clicks OK or CANCEL. if its true, then it will accept lowercase, and add it. 
  if(minusculasPrueba == true){

  }else{
    alert("No Lowercase will be added to Password");
  }
}

//Function to know if user selects uppercase
function mayus(){
  mayusculasPrueba = confirm("Allow Uppercase characters in Password?");

  //Declared if to determine if user clicks OK or CANCEL. if its true, then it will accept uppercase, and add it. 
  if(mayusculasPrueba == true){
  
  }else{
    alert("No Uppercase will be added to Password");
  
  }
  return mayusculasPrueba;
}

//Funcion to know if user needs numbers in password
function nums (){
  numerosPrueba = confirm("Allow Numbers in Password?");

  //Declared if to determine if user clicks OK or CANCEL. if its true, then it will accept numbers, and add it. 
  if(numerosPrueba == true){

  }else{
    alert("No Numbers will be added to Password");
  }
  return numerosPrueba;
}

//Function for special characters
function caracEspeciales(){
  caracteresEspecialesPrueba = confirm("Allow Special characters in Password?")

  //Declared if to determine if user clicks OK or CANCEL. if its true, then it will accept special characters, and add it. 
  if(caracteresEspecialesPrueba == true){

  }else{
    alert("No Special Characters added to Password");
  }
  return caracteresEspecialesPrueba;
}

//Function MAIN 
function generatePassword(){
  //Added a console to when calling the function to know if it was showing TRUE or FALSE correctly on what the user selected.
  //But console logs definitely not needed in the web pages functionality
  contraseña(); console.log(longitudContra);
  mayus(); console.log(mayusculasPrueba);
  nums(); console.log(numerosPrueba);
  caracEspeciales(); console.log(caracteresEspecialesPrueba);
  minus(); console.log(minusculasPrueba);

  //Declared an empty variable to store value after if sentences.
  //Declared an empty Array to store values in each if statement. 

  var contraseña1 = "";
  var combination = [];

  if(minusculasPrueba && mayusculasPrueba && numerosPrueba && caracteresEspecialesPrueba){
    combination += minusculas + mayusculas + numeros + caracteresEspeciales;

  }else if(minusculasPrueba && mayusculasPrueba && numerosPrueba){
    combination += minusculas + mayusculas + numeros;

  }else if(caracteresEspecialesPrueba && mayusculasPrueba && numerosPrueba){
    combination += caracteresEspeciales + mayusculas + numeros;

  }else if(minusculasPrueba && mayusculasPrueba && caracteresEspecialesPrueba){
    combination += minusculas + mayusculas + caracteresEspeciales;

  }else if(minusculasPrueba && mayusculasPrueba){
    combination += minusculas + mayusculas;

  }else if(minusculasPrueba && numerosPrueba){
    combination += minusculas + numeros;

  }else if(minusculasPrueba && caracteresEspecialesPrueba){
    combination += minusculas + caracteresEspeciales;

  }else if(numerosPrueba && caracteresEspecialesPrueba){
    combination += numeros + caracteresEspeciales;

  }else if(mayusculasPrueba && caracteresEspecialesPrueba){
    combination += mayusculas + caracteresEspeciales;

  }else if(mayusculasPrueba && numerosPrueba){
    combination += mayusculas + numeros;

  }else if(minusculasPrueba){
    combination += minusculas;

  }else if(mayusculasPrueba){
    combination += mayusculas;

  }else if(numerosPrueba){
    combination += numeros;

  }else if(caracteresEspecialesPrueba){
    combination += caracteresEspeciales;

  }else{
    confirm("You must select at least 1 prompted criteria, try again.");
    contraseña();
  }
  
  //Used the length variable for this cycle.
  for(i = 0; i < longitudContra; i++){
    contraseña1 += combination[Math.floor(Math.random() * combination.length)];
    //Used the empty varyable and empty Array to return the final password. Using 2 math propertied, to get a number and a random. 
  }
  return contraseña1; //returns the final password on screen. 

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateButton.addEventListener("click", writePassword);