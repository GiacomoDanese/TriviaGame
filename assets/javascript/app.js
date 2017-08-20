window.onload =(function() {
	$("#start-button").on("click", start);
	$("#restart").on("click", restart);
	$(".question").hide();
	$(".answers").hide();

	var time = 10
	


	function start() {
		$("#show-time").html(time +" seconds to answer 10 questions");
		counter = setInterval(timer, 1000);
		
		$(".question").show();
		$(".answers").show();
		$("#restart").hide();
		$("#start-button").hide();
	}

	function timer() {
		time--
		$("#show-time").html(time +" seconds to answer 10 questions");
		if (time === 0) {
			stop();
		}
	}

	function stop() {
		clearInterval(counter); 
		results();
		$("#results").show();
		$("#restart").show();
		$(".question").hide();
		$(".answers").hide();


		

	}

	function restart() {
		time = 50;
		start();

	}

	function results() {
		$(".rules").hide();
		var amountCorrect = 0;          
for(var i = 1; i <= 10; i++) {
  var radios = document.getElementsByName('a'+i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value == "true" && radio.checked) {
      amountCorrect++;
    }
  }
}                   
        $("#results").html("You had " + amountCorrect + " correct answers");
	
			

			

		}
		
	




})