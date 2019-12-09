window.addEventListener('load', function(e){
	console.log('Document Loaded')
	init();
});

function init(){
	getWorkouts();
	document.addWorkoutForm.create.addEventListener('click', function(event) {
	event.preventDefault();
	addNewWorkout();
	showAverageDuration();
});
}

function displayAvgDuration(workouts){
//	console.log(workouts);
	let workoutTotal = 0;
	for(let i = 0; i < workouts.length ; i++){
		console.log(workouts[i].duration);
		workoutTotal += workouts[i].duration;
	}
	console.log(workoutTotal);
	let avgDuration = parseInt(workoutTotal/workouts.length);
	console.log(avgDuration);
	let durationDiv = document.getElementById('averageWorkoutTime');
	let durationAvgOut = document.createElement('h3');
	durationAvgOut.textContent = "The average workout duration is " + avgDuration + " minutes."
	durationDiv.appendChild(durationAvgOut);
	
}
function getWorkouts(){
	// returns a list of all workouts in the database
	let xhr = new XMLHttpRequest();
	
	xhr.open('GET', 'http://localhost:8090/api/exercises/', true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			let workouts = JSON.parse(xhr.responseText);
			displayAllWorkouts(workouts);
			displayAvgDuration(workouts);
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			let dataDiv = document.getElementById('workoutList');
			dataDiv.textContent = 'No Workouts Found';
		}
	};
	xhr.send(null);
	
}
function displayAllWorkouts(workouts){
// table of all workouts
	let workoutData = document.getElementById("workoutList");
	
	
	
	 let workoutTbl = document.createElement("TABLE");
	 workoutTbl.setAttribute("id", "workoutTable");
	  workoutData.appendChild(workoutTbl);


	  let workoutTitles= document.createElement("TR");
	  workoutTbl.appendChild(workoutTitles);

	  let name = document.createElement("TD");
	  name.textContent = "Exercise Name";
	  name.style.fontWeight = "bold";
	  workoutTitles.appendChild(name);
	  let type = document.createElement("TD");
	  type.textContent = "Workout Type";
	  type.style.fontWeight = "bold";
	  workoutTitles.appendChild(type);
	  let dur = document.createElement("TD");
	  dur.textContent = "Duration";
	  dur.style.fontWeight = "bold";
	  workoutTitles.appendChild(dur);
	  let weight = document.createElement("TD");
	  weight.textContent = "Weight (in lbs)";
	  weight.style.fontWeight = "bold";
	  workoutTitles.appendChild(weight);
	  let numReps = document.createElement("TD");
	  numReps.textContent = "Number of Reps";
	  numReps.style.fontWeight = "bold";
	  workoutTitles.appendChild(numReps);
	  let numSets = document.createElement("TD");
	  numSets.textContent = "Number of Sets";
	  numSets.style.fontWeight = "bold";
	  workoutTitles.appendChild(numSets);
	  let place = document.createElement("TD");
	  place.textContent = "Place";
	  place.style.fontWeight = "bold";
	  workoutTitles.appendChild(place);
	  
	  for (let i = 0; i < workouts.length; i++){
		  let workoutData = document.createElement("TR");
		  workoutData.addEventListener('click', function(e){
			  clearTable();
			  document.getElementById("averageWorkoutTime").style.display = "none";
			  getWorkout(workouts[i].id);
			  
		  });
		  workoutTbl.appendChild(workoutData);

		  let nameData = document.createElement("TD");
		  nameData.textContent = workouts[i].name;
		  workoutData.appendChild(nameData);
		  let typeData = document.createElement("TD");
		  typeData.textContent = workouts[i].type;
		  workoutData.appendChild(typeData);
		  let durData = document.createElement("TD");
		  if(workouts[i].duration === null){
			  durData.textContent = "";
			  workoutData.appendChild(durData);
			  
		  }else{
		  durData.textContent = workouts[i].duration + " minutes";
		  workoutData.appendChild(durData);
		  }
		  let weightData = document.createElement("TD");
		  if(workouts[i].weight === null){
			  weightData.textContent = "";
			  workoutData.appendChild(weightData);
			  
		  }else{
		  weightData.textContent = workouts[i].weight + " lbs";
		  workoutData.appendChild(weightData);
		  }
		  let numRepsData = document.createElement("TD");
		  numRepsData.textContent = workouts[i].numReps;
		  workoutData.appendChild(numRepsData);
		  let numSetsData = document.createElement("TD");
		  numSetsData.textContent = workouts[i].numSets;
		  workoutData.appendChild(numSetsData);
		  let placeData = document.createElement("TD");
		  placeData.textContent = workouts[i].place;
		  workoutData.appendChild(placeData);
		  
	  }
	  
}
function addNewWorkout(){
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://localhost:8090/api/exercises', true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			location.reload();
			form.reset();
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			let dataDiv = document.getElementById('createWorkout');
			dataDiv.textContent = 'Error Adding Workout';
		}
	};

	
	let form = document.addWorkoutForm;
	let newWorkout = {
		name : form.name.value,
		type : form.type.value,
		duration : form.duration.value,
		weight : form.weight.value,
		numReps : form.numReps.value,
		numSets : form.numSets.value,
		place : form.place.value
		
	};
	let newWorkoutJsonString = JSON.stringify(newWorkout); 
	xhr.send(newWorkoutJsonString);
	
}
function clearTable() {
	// clears table so that it can be reloaded with updated database information
		let table = document.getElementById('workoutList');
		while (table.firstElementChild) {
			table.removeChild(table.firstElementChild);
		}
	}
function getWorkout(exerciseId) {

	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://localhost:8090/api/exercises/' + exerciseId, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			let exerciseObject = JSON.parse(xhr.responseText);
			displayExercise(exerciseObject);
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			let dataDiv = document.getElementById('exerciseDetail');
			dataDiv.textContent = 'Exercise Not Found';
		}
	};
	xhr.send(null);
}


function displayExercise(exercise){
	let exerciseDataDiv = document.getElementById('exerciseDetail')
	let title = document.createElement('h1');
	title.textContent = 'Workout Detail';
	exerciseDataDiv.appendChild(title);
	let workoutDataDetail = document.createElement('ul');
	exerciseDataDiv.appendChild(workoutDataDetail);
	
	 let nameData = document.createElement("li");
	  nameData.textContent = "Name of Exercise: " + exercise.name;
	  workoutDataDetail.appendChild(nameData);
	  let typeData = document.createElement("li");
	  typeData.textContent = "Type of workout: " + exercise.type;
	  workoutDataDetail.appendChild(typeData);
	  
	  if(exercise.duration !== null){
		  let durData = document.createElement("li");
		  durData.textContent = "Duration: " + exercise.duration + " minutes";
		  workoutDataDetail.appendChild(durData);
	  }
	  
	  if(exercise.weight !== null){
		  let weightData = document.createElement("li");
		  weightData.textContent = "Wight: " + exercise.weight + " lbs";
		  workoutDataDetail.appendChild(weightData);
	  }
	  if(exercise.numReps !== null){
	  let numRepsData = document.createElement("li");
	  numRepsData.textContent = "Number of Reps: " + exercise.numReps;
	  workoutDataDetail.appendChild(numRepsData);
	  }
	  if(exercise.numSets !== null){
	  let numSetsData = document.createElement("li");
	  numSetsData.textContent = "Number of Sets: " + exercise.numSets;
	  workoutDataDetail.appendChild(numSetsData);
	  }
	  let placeData = document.createElement("li");
	  placeData.textContent = "Place: " + exercise.place;
	  workoutDataDetail.appendChild(placeData);
	  //removes create workout form
//	  let addDataDiv = document.getElementById('createWorkout')
	  document.getElementById("createWorkout").style.display = "none";
	  
	  //adds Edit workout button
	  let editButton = document.createElement('BUTTON');
	  editButton.textContent = 'Edit Workout';
	  exerciseDataDiv.appendChild(editButton);
	  editButton.addEventListener('click', function(e){
		  editExerciseForm(exercise);
		  document.getElementById("exerciseDetail").style.display = "none";
	  });
	  
	  //adds Delete workout button
	  let deleteButton = document.createElement('BUTTON');
	  deleteButton.textContent = 'Delete Workout';
	  exerciseDataDiv.appendChild(deleteButton);
	  deleteButton.addEventListener('click', function(e){
		  e.preventDefault();
		  console.log('delete' + exercise.name);
		  console.log(exercise.id);
		 let exerciseId = exercise.id;
		 if (!isNaN(exerciseId) && exerciseId > 0) {
			 deleteWorkout(exerciseId);
			 document.body.removeChild(exerciseDataDiv);
		 }
		 
		  
	  })
	  
	  
}

function editExerciseForm(exercise){
	console.log(exercise.name);


	let edit = document.getElementById('editExercise')
	let editWorkoutForm = document.createElement('form');
	editWorkoutForm.setAttribute('name', 'editWorkoutForm');
	editWorkoutForm.setAttribute('id', 'editWorkoutForm')
	edit.appendChild(editWorkoutForm);
	let exerciseId = document.createElement("INPUT");
	exerciseId.type = 'hidden';
	exerciseId.name = 'id';
	exerciseId.value = exercise.id;
	editWorkoutForm.appendChild(exerciseId);
	
	 let exerciseName = document.createElement("INPUT");
	 exerciseName.type = 'text';
	 exerciseName.name = 'name';
	 exerciseName.value = exercise.name;
	 editWorkoutForm.appendChild(exerciseName);
	 
	 let exerciseType = document.createElement("INPUT");
	 exerciseType.type = 'text';
	 exerciseType.name = 'type';
	 exerciseType.value = exercise.type;
	 editWorkoutForm.appendChild(exerciseType);
	 
	 let exerciseDuration = document.createElement("INPUT");
	 exerciseDuration.type = 'text';
	 exerciseDuration.name = 'duration';
	 if(exercise.duration === null || exercise.duration === undefined || exercise.duration === ''){
		 exerciseDuration.placeholder = 'Duration';
		 editWorkoutForm.appendChild(exerciseDuration);
	 }else{
		 exerciseDuration.value = exercise.duration;
		 editWorkoutForm.appendChild(exerciseDuration);
	 }
	 
	 let exerciseWeight = document.createElement("INPUT");
	 exerciseWeight.type = 'text';
	 exerciseWeight.name = 'weight';
	 
	 if(exercise.weight === null || exercise.weight === undefined || exercise.weight === ''){
		 exerciseWeight.placeholder = 'Weight';
		 editWorkoutForm.appendChild(exerciseWeight);
	 }else{
		 exerciseWeight.value = exercise.weight;
		 editWorkoutForm.appendChild(exerciseWeight);
	 }
	 
	 
	 let exerciseNumReps = document.createElement("INPUT");
	 exerciseNumReps.type = 'text';
	 exerciseNumReps.name = 'numReps';
	 if(exercise.numReps === null || exercise.numReps === undefined || exercise.numReps === ''){
		 exerciseNumReps.placeholder = 'Number of Reps';
		 editWorkoutForm.appendChild(exerciseNumReps);
	 }else{
		 exerciseNumReps.value = exercise.numReps;
		 
		 editWorkoutForm.appendChild(exerciseNumReps);
	 }
	 
	 let exerciseNumSets = document.createElement("INPUT");
	 exerciseNumSets.type = 'text';
	 exerciseNumSets.name = 'numSets';
	 if(exercise.numSets === null || exercise.numSets === undefined || exercise.numSets === ''){
		 exerciseNumSets.placeholder = 'Number of Sets';
		 console.log("stuff " + exercise.numSets);
		 editWorkoutForm.appendChild(exerciseNumSets);
	 }else{
		 exerciseNumSets.value = exercise.numSets;
		 
		 editWorkoutForm.appendChild(exerciseNumSets);
	 }
	 
	 let exercisePlace = document.createElement("INPUT");
	 exercisePlace.type = 'text';
	 exercisePlace.name = 'place';
	 exercisePlace.value = exercise.place;
	 editWorkoutForm.appendChild(exercisePlace);

	 let updateBtn = document.createElement("INPUT");
	 updateBtn.setAttribute("type", "submit");
	 updateBtn.setAttribute("name", "update");
	 updateBtn.setAttribute("value", "Update");
	 
	 editWorkoutForm.appendChild(updateBtn);
	  updateBtn.addEventListener('click', function(e){
		  e.preventDefault();
	

		  let xhr = new XMLHttpRequest();
			xhr.open('PUT', 'http://localhost:8090/api/exercises/' + exercise.id, true);
			xhr.setRequestHeader("Content-type", "application/json");
			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4 && xhr.status < 400) {
					clearTable();
					form.reset();
					init();
				}
				if (xhr.readyState === 4 && xhr.status >= 400) {
					console.error(xhr.status + ': ' + xhr.responseText);
					let dataDiv = document.getElementById('editExercise');
					dataDiv.textContent = 'Error Editing Workout';
				}
			};
			
			console.log(exercise.duration);
		
		let form = document.editWorkoutForm;
			let editedWorkout = {
					id : document.editWorkoutForm.id.value,
					name : document.editWorkoutForm.name.value,
					type : document.editWorkoutForm.type.value,
					duration : document.editWorkoutForm.duration.value,
					weight : document.editWorkoutForm.weight.value,
					numReps : document.editWorkoutForm.numReps.value,
					numSets : document.editWorkoutForm.numSets.value,
					place : document.editWorkoutForm.place.value
					
				};
				let editedWorkoutJsonString = JSON.stringify(editedWorkout); 
				xhr.send(editedWorkoutJsonString);

				location.reload();
	  });
} 
function deleteWorkout(exerciseId){
	
		console.log(exerciseId);
		   var xhr = new XMLHttpRequest();
		   xhr.open('DELETE', 'http://localhost:8090/api/exercises/' + exerciseId, true);
		   xhr.onreadystatechange = function() {
			      if (xhr.readyState === 4 && xhr.status < 400) {
			    	  location.reload();
			      }
			      if (xhr.readyState === 4 && xhr.status >= 400) {
			         console.error(xhr.status + ': ' + xhr.responseText);
			      }
			   };
			   xhr.send(null);
}

	 





