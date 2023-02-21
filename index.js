

//Initialise the application.

var Pusher = require("pusher");

const express = require("express");
var app = express();
const port = 8080;


// Need this to decode json stuff



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors());



//Initialise PUSHER 

  var pusher = new Pusher({
  appId: "1530271",
  key: "06ea79c08714f3f7d33e",
  secret: "044b6603441b84ef3ec5",
  cluster: "ap1",
});



app.post("/", (req, res) => {
	
req.setTimeout(0) // no timeout


console.log(req.body.event);









	//questions MODIFIED Triggered
if (req.body.event == 'questionsModified') { 

		pusher.trigger(req.body.event_id, "questionsModified", {  });
		 res.send("successful");
		 
	}


	//INITQUSTION Triggered
if (req.body.event == 'additionalQuestion') { 

		pusher.trigger(req.body.event_id, "additionalQuestion", { teamName: req.body.teamName, questionText: req.body.questionText, pointsIncorrect : req.body.pointsIncorrect, pointsCorrect: req.body.pointsCorrect, secsToAnswer: req.body.secsToAnswer });
		 res.send("successful");
		 
	}
	
	
	
	


	//INITQUSTION Triggered
if (req.body.event == 'refreshScores') { 

		pusher.trigger(req.body.event_id, "refreshScores", {  });
		 res.send("successful");
		 
	}
	
	

	





	//INITQUSTION Triggered
if (req.body.event == 'unableToJoin') { 

		pusher.trigger(req.body.event_id, "unableToJoin", { teamName: req.body.teamName });
		 res.send("successful");
		 
	}
	
	
	
	
	

	
	//INITQUSTION Triggered
if (req.body.event == 'joinedGame') { 

		pusher.trigger(req.body.event_id, "joinedGame", { teamName: req.body.teamName, eventId: req.body.event_id });
		 res.send("successful");
		 
	}
	
	


	//MARK CORRECT Triggered
if (req.body.event == 'markCorrect') { 
		pusher.trigger(req.body.event_id, "markCorrect", { questionId: req.body.questionId, teamId: req.body.teamId});
		 res.send("successful");
		 
	}
	
	
	

	//MARK INCORRECT Triggered
if (req.body.event == 'markIncorrect') { 
		pusher.trigger(req.body.event_id, "markIncorrect", { questionId: req.body.questionId, teamId: req.body.teamId});
		 res.send("successful");
		 
	}
	


	//MORE TIME Triggered
if (req.body.event == 'moreTime') { 
		pusher.trigger(req.body.event_id, "moreTime", { extendBy: req.body.extendBy});
		 res.send("successful");
		 
	}
	
	
		//ANNOUNCE ANSWER Triggered
if (req.body.event == 'announceAnswer') { 
								pusher.trigger(req.body.event_id, "announceAnswer", {  });

		pusher.trigger(req.body.event_id, "announceAnswer", { answer: req.body.answer, answerType: req.body.answerType});
		 res.send("successful");
		 
	}
	



	
	//INITQUSTION Triggered
if (req.body.event == 'initQuestion') { 
								pusher.trigger(req.body.event_id, "resetCountDownBar", {  });

		pusher.trigger(req.body.event_id, "initQuestion", { questionType: req.body.question_type, questionId: req.body.question_id });
		 res.send("successful");
		 
	}
	
	
	


	//CLOSE SCOREBOARD Triggered
if (req.body.event == 'kickOut') { 
	
		console.log("kickout Triggered");
		pusher.trigger(req.body.event_id, "kickOut", { teamId: req.body.teamId });
		 res.send("successful");
		 
	}
	
	


	//CLOSE SCOREBOARD Triggered
if (req.body.event == 'closeScoreboard') { 
	
		pusher.trigger(req.body.event_id, "closeScoreboard", {  });
		 res.send("successful");
		 
	}
	
	



	//INCORRECT Triggered
if (req.body.event == 'startCountDownBar') { 
	
				pusher.trigger(req.body.event_id, "startCountDownBar", { secsToAnswer: req.body.secsToAnswer });

		 res.send("successful");
		 
	}
	
	
	
		//INCORRECT Triggered
if (req.body.event == 'resetCountDownBar') { 
	
		pusher.trigger(req.body.event_id, "resetCountDownBar", {  });
		 res.send("successful");
		 
	}
	
	
	
	
	


//askQuestion Triggered
if (req.body.event == 'showScoreboard') { 
	
		pusher.trigger(req.body.event_id, "showScoreboard", {  });
		 res.send("successful");
		 
	}
	
	
	
	//CORRECT Triggered
if (req.body.event == 'showCorrect') { 
	
		pusher.trigger(req.body.event_id, "showCorrect", {  });
		 res.send("successful");
		 
	}
	
	
	
	
	//INCORRECT Triggered
if (req.body.event == 'showIncorrect') { 
	
		pusher.trigger(req.body.event_id, "showIncorrect", {  });
		 res.send("successful");
		 
	}

//askQuestion Triggered
if (req.body.event == 'askQuestion') { 
	
	
	
	
	console.log("askQuestion triggered");
	
	
	
		//ABCD Question Asked
	
		if (req.body.question_type == 'ABCD') { 
			console.log("ABCD Triggered");
									pusher.trigger(req.body.event_id, "startCountDownBar", { secsToAnswer: req.body.secsToAnswer });

		pusher.trigger(req.body.event_id, "askQuestion", { questionType: req.body.question_type, secsToAnswer: req.body.secsToAnswer });
		 res.send("successful");
		
		}
		
	
	//True or False Question Asked
	
		if (req.body.question_type == 'TF') { 
			console.log("True or false");
									pusher.trigger(req.body.event_id, "startCountDownBar", { secsToAnswer: req.body.secsToAnswer });

		pusher.trigger(req.body.event_id, "askQuestion", { questionType: req.body.question_type, secsToAnswer: req.body.secsToAnswer });
				 res.send("successful");

		
		}
		
		
	//World question asked

		if (req.body.question_type == 'WORLD') { 
				console.log("World triggered");
									pusher.trigger(req.body.event_id, "startCountDownBar", { secsToAnswer: req.body.secsToAnswer });

		pusher.trigger(req.body.event_id, "askQuestion", { questionType: req.body.question_type, secsToAnswer: req.body.secsToAnswer });
				 res.send("successful");


}

	//Free text question asked

		if (req.body.question_type == 'FT') { 
				console.log("Free text triggered");
									pusher.trigger(req.body.event_id, "startCountDownBar", { secsToAnswer: req.body.secsToAnswer });

		pusher.trigger(req.body.event_id, "askQuestion", { questionType: req.body.question_type, secsToAnswer: req.body.secsToAnswer });
				 res.send("successful");


}


	//Number  question asked

		if (req.body.question_type == 'NUMBER') { 
				console.log("Number triggered");
									pusher.trigger(req.body.event_id, "startCountDownBar", { secsToAnswer: req.body.secsToAnswer });

		pusher.trigger(req.body.event_id, "askQuestion", { questionType: req.body.question_type, secsToAnswer: req.body.secsToAnswer });
				 res.send("successful");


}


}








});


// Post something back to show it's working.


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});









