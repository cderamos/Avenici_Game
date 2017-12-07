#pragma strict
//Declare local variable
var speed : float;

//Move 2D gameObject (Bolt) using the Rigid Body component
function Start () : void {
    rigidbody2D.velocity = transform.forward * speed;
}