#pragma strict

//Declare local Spawn Variables
var hazard : GameObject;
var spawnValues : Vector2;
var hazardCount : int;
var spawnWait : float;
var startWait : float;
var waveWait : float;

//Declare Local Score Variables
var scoreText: GUIText;
private var gameScore: int;
var healthSlider : Slider;  


function Start () {
	 gameScore = 0;//set gameScore to 0 at start of game
     UpdateScore ();   
     StartCoroutine (SpawnWaves ());//spawn enemy waves    
}

function SpawnWaves () {
    yield WaitForSeconds (startWait);
    while (true)
    {
    	//keep Spawning as many times as hazard count, time waveWait (until next wave starts), then spawn again
        for ( var e: int= 0; e < hazardCount;e++)
        {
        	//spawn enemy gameObjects at random xValues
             var spawnPosition : Vector2 = new Vector2 (Random.Range(-spawnValues.x, spawnValues.x), spawnValues.y);
             Instantiate (hazard, spawnPosition, Quaternion.identity);//clone enemy gameObjects
             yield WaitForSeconds (spawnWait);
             
             
        }
        yield WaitForSeconds (waveWait);
        
  	}
  
 }




//Adds 10 point value whenever enemy is hit
function AddScore (newScoreValue : int) {
    gameScore += newScoreValue;
    UpdateScore ();
}

//Updates Score whenever enemy object is hit
function UpdateScore () {
    scoreText.text = ": " + gameScore;
}
