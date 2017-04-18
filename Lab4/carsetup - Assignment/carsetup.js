var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var center = c.width/2;

//Select the following Elements using the querySelector function | Done!

		var carWidth = document.querySelector("#car-width .range");
	
		//create a variable called wd and assign the wheelDistance slider's value to it as a Number. | Done!
		var wheelDistance = document.querySelector("#wheel-distance .range");

		var roofSlider = document.querySelector("#roof-height .range");

		var ftSlider = document.querySelector("#front-tire .range");

		var rtSlider = document.querySelector("#rear-tire .range");

		var rearSlider = document.querySelector("#rear-pitch .range");

		var frontSlider = document.querySelector("#front-pitch .range");

		var colorInput = document.querySelector("#color .text");

		var sponsoredcheckBox = document.querySelector("#sponsor .text");

		var sponsorNameBox = document.querySelector("#sponsor .range");
		

	//Open up the console and look at the properties for the protocar object
	//console.log(protocar);

/*	
	Create a new object called "car" in object literal notation. Give it all the properties and values of the protocar. 
	Please note that the rt (rear tire), ft (front tire) and sponsor properties are child objects. | Done!
*/

var timer = setInterval(animate, 1000/60);

function animate()
{
		ctx.clearRect(0,0,c.width,c.height);
		
		var car = {
			//convert the carWidth's value to a number and assign it to the car's width property | Done!
			width: carWidth.value,
			
			//convert the frontSlider's value to a number and assign it to the car's front property | Done!
			front: parseInt(frontSlider.value),
			
			//set the car's front tires' radius properties equal to the ft slider's values | Done!
			//set the car's front tire's x property equal to the center plus wd. | Done!
			ft: {color:"#000000", radius: ftSlider.value, x: center + parseInt(wheelDistance.value), y: 550},
			
			//convert the rearSlider's value to a number and assign it to the car's rear property | Done!
			rear: parseInt(rearSlider.value),
			
			//convert the roofSlider's value to a number and assign it to the car's roof property | Done!
			roof: parseInt(roofSlider.value),
			
			//set the car's rear tires' radius properties equal to the rt slider's values | Done!
			//set the car's rear tire's x property equal to the center minus wd. | Done!
			rt: {color:"#000000", radius: rtSlider.value, x: center - parseInt(wheelDistance.value), y: 550},
			sponsor: {decal: false, name: ""},
			topLimit: "550",
			
			//convert the colorInput's value to a number and assign it to the car's color property | Done!
			color: colorInput.value
		};	
		
		if (sponsoredcheckBox.checked == false)
		{
			sponsorNameBox.disabled = true;
			car.sponsor.decal = false;
		}
		else
		{
			sponsorNameBox.disabled = false;
			car.sponsor.decal = true;
			car.sponsor.name = sponsorNameBox.value;
		}
		
        //call the drawCar() function and pass it your car object | Done!
		drawCar(car);
		
		
		//set the roof, front and rear sliders' .max attributes to the car's topLimit property | Done!
        frontSlider.max = car.topLimit;
		rearSlider.max = car.topLimit;
		roofSlider.max = car.topLimit;
		
		
		
		
		/*
		
		Use a conditional statement (if else) to determine whether the sponsored input is checked or not. | Done!
	
		if it is checked do the following:
			1. enable the sponsorNameBox | Done!
			2. set the car's sponsor decal to true | Done!
			3. set the car's sponsor name to the value of the sponsorNameBox | Done!
		else
			1. disable the sponsorNameBox | Done!
			2. set the car's sponsor decal to false | Done!
		
		*/
		
	
		
     
}
