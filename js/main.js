var pattern = ['R', 'Y', 'B', 'R', 'G', 'Y', 'B'] // array of values
var num = 0; //number to select in array

$('.panel').on('click', function() { // on click, do action (on panel)

// Does you panel you clicked match the 
//current item in the sequence

	var colour = $(this).attr('data-colour'); //storing the attribute datacolor in panel as color

	if ( colour == pattern [num] ) {//targetting first item (R) in array
		console.log("CORRECT!");
		//or num++;
		num = num + 1 //checks for next number in array if correct
		
		if (num > pattern.length-1) { //when num is at 5 or greater, print "win"
			console.log("YOU WIN");
		}
	}

	else {
		console.log("WRONG");
	}

});