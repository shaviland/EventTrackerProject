window.addEventListener('load', function(e){
	console.log('Document Loaded')
	init();
});

function init(){
	getWorkouts();
	
	document.addWorkoutForm.create.addEventListener('click', function(event) {
		event.preventDefault();
		addNewWorkout();
	});
}
function getWorkouts(){
	//returns a list of all workouts in the database
	var xhr = new XMLHttpRequest();
	
	xhr.open('GET', 'http://localhost:8090/api/exercises/', true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			var workouts = JSON.parse(xhr.responseText);
			displayWorkout(workouts);
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			var dataDiv = document.getElementById('workoutList');
			dataDiv.textContent = 'No Workouts Found';
		}
	};
	xhr.send(null);
	
}
function displayWorkout(workouts){
//table of all workouts
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
	  var weight = document.createElement("TD");
	  weight.textContent = "Weight (in lbs)";
	  weight.style.fontWeight = "bold";
	  workoutTitles.appendChild(weight);
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
		  if(workouts[i].duration === null){
			  durData.textContent = "";
			  workoutData.appendChild(durData);
			  
		  }else{
		  durData.textContent = workouts[i].duration + " minutes";
		  workoutData.appendChild(durData);
		  }
		  var weightData = document.createElement("TD");
		  if(workouts[i].weight === null){
			  weightData.textContent = "";
			  workoutData.appendChild(weightData);
			  
		  }else{
		  weightData.textContent = workouts[i].weight + " lbs";
		  workoutData.appendChild(weightData);
		  }
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
function addNewWorkout(){
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://localhost:8090/api/exercises', true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			clearTable();
			init();
			form.reset();
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			var dataDiv = document.getElementById('createWorkout');
			dataDiv.textContent = 'Error Adding Workout';
		}
	};

	
	let form = document.addWorkoutForm;
	var newWorkout = {
		name : form.name.value,
		type : form.type.value,
		duration : form.duration.value,
		weight : form.weight.value,
		numReps : form.numReps.value,
		numSets : form.numSets.value,
		place : form.place.value
		
	};
	var newWorkoutJsonString = JSON.stringify(newWorkout); 
	xhr.send(newWorkoutJsonString);
	
}
function clearTable() {
	//clears table so that it can be reloaded with updated database information
		let table = document.getElementById('workoutList');
		while (table.firstElementChild) {
			table.removeChild(table.firstElementChild);
		}
	}









