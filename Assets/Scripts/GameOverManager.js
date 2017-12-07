#pragma strict

//Declare Local variables, referene playerHealth and Animator
var playerHealth : BoundaryDestroy;
private var anim : Animator;            

function Awake ()
{
    // Set up the reference
    anim = GetComponent (Animator);
}


function Update ()
{
    // If the player has run out of health, reference the animator to play game over screen
    if(playerHealth.currentHealth <= 0 ||GameObject.FindWithTag("Player") == null)
    {
        
        anim.SetTrigger ("GameOver");
			//reload level when user presses "R" button
        	if(Input.GetKeyDown("r"))
        	{
            
            Application.LoadLevel(Application.loadedLevel);
            }
        }
    }
 
