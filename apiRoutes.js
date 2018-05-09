const friends = require('./friends.js');

module.exports = function(app){

	app.get('./friends.js', function(req, res){
		res.json(friends);
	});

	app.post('./friends.js', function(req, res){

		var bestMatch = {
			name: "",
			photo: "",
			friendDifference: 1000
		};

		const userData 	= req.body;
		const userName 	= userData.name;
		const userPhoto = userData.photo;
		const userScores = userData.scores;

        const totalDifference = 0;
        
		for  (const i=0; i< friends.length; i++) {

			console.log(friends[i].name);
			totalDifference = 0;

			for (const j=0; j< friends[i].scores[j]; j++){
				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

				if (totalDifference <= bestMatch.friendDifference){

					bestMatch.name = friends[i].name;
					bestMatch.photo = friends[i].photo;
					bestMatch.friendDifference = totalDifference;
				}
			}
		}

		friends.push(userData);

		res.json(bestMatch);

	});

}