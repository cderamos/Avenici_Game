#pragma strict


import UnityEngine.UI;//Import Unity engine
//declare local variables
var startingHealth : int = 100;                             
var currentHealth : int;                                   
var healthSlider : Slider;  
var damageAmount : int = 10;


function Awake ()
{
	//start with health of 100 at the beginning of the  game
	currentHealth = startingHealth;
}

//Destroy gameObject when out of boundary
function OnTriggerExit2D(other : Collider2D)
{
	//If the gameObject is tagged with "Enemy"
	if (other.tag == "Enemy") {

     // Reduce the current health by the damage amount.
    currentHealth -= damageAmount;

    // Set the health bar's value to the current health.
    healthSlider.value = currentHealth;

  
  	
    }
    //Destroy both gameObjects, minotaur and bolt, when out of bounds
    if (other.tag == "Bolt" || other.tag == "Enemy") 
    {
      Destroy(other.gameObject);
      }
    
}
