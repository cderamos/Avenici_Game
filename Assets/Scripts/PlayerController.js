#pragma strict
//Declare boundary variables
class Boundary
{
    var xMin : float;
    var xMax : float;
    var yMin : float;
    var yMax : float;
}

var speed : float;
var boundary : Boundary;

function FixedUpdate () {
     var moveHorizontal : float= Input.GetAxis ("Horizontal");//movement on x-axis
     var moveVertical : float= Input.GetAxis ("Vertical");//movement on y-axis

	//movement and speed and Mage GameObjects
     var movement : Vector2= new Vector2 (moveHorizontal, moveVertical);
    rigidbody2D.velocity = movement * speed;

	//Keep gameObject in given x and y boundaries
    rigidbody2D.position = new Vector2
    (
        Mathf.Clamp (rigidbody2D.position.x, boundary.xMin, boundary.xMax), 
        Mathf.Clamp (rigidbody2D.position.y, boundary.yMin, boundary.yMax)
    );
    
    

}
  