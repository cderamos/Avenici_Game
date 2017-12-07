#pragma strict

//Declare local variables
var scoreValue : int;
private var gameManager : MainGameManager;


function Start ()
{
    var gameControllerObject : GameObject = GameObject.FindWithTag ("GameController");
    if (gameControllerObject != null)
    {
        gameManager = gameControllerObject.GetComponent (MainGameManager);
    }
    if (gameManager== null)
    {
        Debug.Log ("Cannot find 'GameController' script");
    }
}
//Destroys other collider GameObjects
function OnTriggerEnter2D(other : Collider2D) 
{	

   
    if (other.tag == "Boundary")//If gameObject is in boundary, return to the original function/loop. If gameObject is not in boundary, then destroy.
    {
    	
 		return;
 		 	
   	}
  
   	//Destroy colliding game objects, update score value when given GameObject is destroyed
    gameManager.AddScore (scoreValue);
    Destroy(other.gameObject);//destroys the Bolt
    Destroy(gameObject);//destroys the Minotaur Enemy
}



