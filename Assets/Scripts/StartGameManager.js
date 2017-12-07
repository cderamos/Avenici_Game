#pragma strict

var startGame: float = 200f; 

private var anim : Animator;           
private var startTimer : float;

function Awake ()
{
    // Set up the reference.
    anim = GetComponent (Animator);
}

function Update () {
 if(Input.GetKeyDown("s"))
        {
            // .. then reload the currently loaded level.
            Application.LoadLevel(Application.loadedLevel);
        }
}