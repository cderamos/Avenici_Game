#pragma strict

//Declare local variables
private var nextFire : float;
var fireRate : float;
var shotSpawn : Transform;
var shot : GameObject;

function  Update ()
    {//user will shoot when spacebar is hit
        if (Input.GetKeyDown("space") && Time.time > nextFire)
        {	//the time in between shoots
            nextFire = Time.time + fireRate;
            Instantiate(shot, shotSpawn.position, Quaternion.identity);//clone gameObjects
            audio.Play ();//play audio when spacebar is hit/shot has been fired
        }
        
        
    }
    
