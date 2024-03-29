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
	var tempX,tempY;

	tempX=x*Math.cos(angle) - y*Math.sin(angle) - 50*(Math.cos(angle) - Math.sin(angle) - 1);
	tempY=x*Math.sin(angle) + y*Math.cos(angle) - 50*(Math.cos(angle) + Math.sin(angle) - 1);

	coordinates.x1=Math.round(tempX);
	coordinates.y1=Math.round(tempY);

	x=coordinates.x2;
	y=coordinates.y2;

	tempX=x*Math.cos(angle) - y*Math.sin(angle) - 50*(Math.cos(angle) - Math.sin(angle) - 1);
	tempY=x*Math.sin(angle) + y*Math.cos(angle) - 50*(Math.cos(angle) + Math.sin(angle) - 1);

	coordinates.x2=Math.round(tempX);
	coordinates.y2=Math.round(tempY);
}

function horizontalFlip(coordinates)
{
	coordinates.y1 = 100 - coordinates.y1;
	coordinates.y2 = 100 - coordinates.y2;
}

function verticalFlip(coordinates)
{
	coordinates.x1 = 100 - coordinates.x1;
	coordinates.x2 = 100 - coordinates.x2;
}

/* Code for testing */

initializeCoordinates();
//rotateTransform(imaginaryPlane,Math.PI);
horizontalFlip(imaginaryPlane);
verticalFlip(imaginaryPlane);

console.log(imaginaryPlane.x1+" "+imaginaryPlane.y1 + " " + imaginaryPlane.x2+" " + imaginaryPlane.y2);
