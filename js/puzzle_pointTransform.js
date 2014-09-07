/*
*	A puzzle game developed by Gaurav Sharma
*	For the purpose of learning HTML5 Canvas.
*/

/* A json object containing coordinates of 2 points in an imaginary plane*/
var imaginaryPlane;

/*
Let Consider an imaginary square platform of size 100*100
2 points in it (0,0) & (75,100)
*/
function initializeCoordinates()
{
	imaginaryPlane={x1:0, y1:0, x2:75, y2:100};
}

/*Rotate plane with respect to centre (50,50)*/
function rotateTransform(coordinates,angle)
{
	var x=coordinates.x1;
	var y=coordinates.y1;

	x=x*Math.cos(angle) - y*Math.sin(angle) + 50*(Math.sin(angle) - Math.cos(angle) + 1);
	y=x*Math.sin(angle) + y*Math.cos(angle) - 50*(Math.sin(angle) + Math.cos(angle) - 1);

	coordinates.x1=Math.round(x);
	coordinates.y1=Math.round(y);
}

/* Code for testing */

initializeCoordinates();
rotateTransform(imaginaryPlane,Math.PI/2);
console.log(imaginaryPlane.x1+" "+imaginaryPlane.y1);
