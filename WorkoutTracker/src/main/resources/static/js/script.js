window.addEventListener('load', function(e){
	console.log('Document Loaded')
	init();
});

function init(){
	//TODO make it pretty
	getWorkouts();
}
function getWorkouts(){
	
	var xhr = new XMLHttpRequest();
	
	xhr.open('GET', 'http://localhost:8090/api/exercises/', true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			var workouts = JSON.parse(xhr.responseText);
			displayWorkout(workouts);
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			var dataDiv = document.getElementById('filmData');
			dataDiv.textContent = 'Film Not Found';
		}
	};
	xhr.send(null);
	
}

function displayWorkout(workouts){
	var workoutData = document.getElementById("workoutList");
	
	
	
	 var workoutTbl = document.createElement("TABLE");
	 workoutTbl.setAttribute("id", "workoutTable");
	  workoutData.appendChild(workoutTbl);


	  var workoutTitles= document.createElement("TR");
	  workoutTbl.appendChild(workoutTitles);

	  var name = document.createElement("TD");
	  name.textContent = "Exercise Name";
	  name.style.fontWeight = "bold";
	  workoutTitles.appendChild(name);
	  var type = document.createElement("TD");
	  type.textContent = "Workout Type";
	  type.style.fontWeight = "bold";
	  workoutTitles.appendChild(type);
	  var dur = document.createElement("TD");
	  dur.textContent = "Duration";
	  dur.style.fontWeight = "bold";
	  workoutTitles.appendChild(dur);
	  var numReps = document.createElement("TD");
	  numReps.textContent = "Number of Reps";
	  numReps.style.fontWeight = "bold";
	  workoutTitles.appendChild(numReps);
	  var numSets = document.createElement("TD");
	  numSets.textContent = "Number of Sets";
	  numSets.style.fontWeight = "bold";
	  workoutTitles.appendChild(numSets);
	  var place = document.createElement("TD");
	  place.textContent = "Place";
	  place.style.fontWeight = "bold";
	  workoutTitles.appendChild(place);
	  
	  for (let i = 0; i < workouts.length; i++){
		  var workoutData = document.createElement("TR");
		  workoutTbl.appendChild(workoutData);

		  var nameData = document.createElement("TD");
		  nameData.textContent = workouts[i].name;
		  workoutData.appendChild(nameData);
		  var typeData = document.createElement("TD");
		  typeData.textContent = workouts[i].type;
		  workoutData.appendChild(typeData);
		  var durData = document.createElement("TD");
		  durData.textContent = workouts[i].duration;
		  workoutData.appendChild(durData);
		  var numRepsData = document.createElement("TD");
		  numRepsData.textContent = workouts[i].numReps;
		  workoutData.appendChild(numRepsData);
		  var numSetsData = document.createElement("TD");
		  numSetsData.textContent = workouts[i].numSets;
		  workoutData.appendChild(numSetsData);
		  var placeData = document.createElement("TD");
		  placeData.textContent = workouts[i].place;
		  workoutData.appendChild(placeData);
		  
	  }
	  
	  
}







