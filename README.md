## Workout Tracker

### Overview
This is an application to track a user's workouts.

### Description
The user can keep track of the kind of workout they have done, the type, duration, weight, number of reps, number of sets, and where it was completed (at home vs at the gym). This application utilizes full CRUD capabilities, they can create a new exercise, view all exercises completed or a single one by ID, update a workout, or delete if necessary.
```json
{
       "id": 1,
       "name": "walking",
       "type": "aerobic",
       "duration": 15,
       "weight": null,
       "numReps": null,
       "numSets": null,
       "place": "gym"
   },
   {
       "id": 2,
       "name": "bicep curls",
       "type": "weight training",
       "duration": null,
       "weight": 45,
       "numReps": 12,
       "numSets": 2,
       "place": "gym"
   },
   {
       "id": 3,
       "name": "lat pulls",
       "type": "weight training",
       "duration": null,
       "weight": 45,
       "numReps": 12,
       "numSets": 2,
       "place": "gym"
   },
   {
       "id": 4,
       "name": "push ups",
       "type": "bodyweight training",
       "duration": null,
       "weight": null,
       "numReps": 25,
       "numSets": 3,
       "place": "home"
   },
   {
       "id": 5,
       "name": "yoga",
       "type": "yoga",
       "duration": 60,
       "weight": null,
       "numReps": null,
       "numSets": null,
       "place": "yoga studio"
   },
   {
       "id": 6,
       "name": "circuit",
       "type": "weight endurance",
       "duration": 30,
       "weight": 45,
       "numReps": 20,
       "numSets": 2,
       "place": "gym"
   }
   ```

### API REST endpoints
* 

   ```
   | Return Type    | Route                     | Functionality               |
   | -------------- | ------------------------- | --------------------------- |
   | List<Exercise> | GET api/exercises         | Gets all exercises          |
   | Exercise       | GET api/exercise/{id}     | Gets one exercise by ID     |
   | Exercise       | POST api/exercises        | Creates new exercise        |
   | Exercise       | Put api/exercises/{id}    | Updates one exercise by ID  |
   | Boolean        | DELETE api/exercises/{id} | Deletes one exercise by ID  |
   ```


### Technologies Used
* Java
* JPA
* Gradle
* Hibernate
* Tomcat/Apache
* Spring Boot
* RESTful
* JSON
* MySQL Workbench
* Atom
* Postman


### Lessons Learned
* How to create a new STS workspace.
* Associate the workspace with a Github repo.
* Use MySQL Workbench to create a database schema with a single table.
* Create a Gradle Project for the Exercise entity and tests.
* Create a Spring Boot project for the REST API controller, service, and Spring Data JPA repository.
* Create controller logic to perform the basic CRUD operations of a REST API.
* Test these routes using Postman

  * Controller example:
  ```java
  @Override
	public Exercise updateExercise(Integer eid, Exercise exercise) {
		Exercise updatedExercise = null;
		Optional<Exercise> opt = repo.findById(eid);
		if (opt.isPresent()) {
			updatedExercise = opt.get();
			updatedExercise.setName(exercise.getName());
			updatedExercise.setType(exercise.getType());
			updatedExercise.setDuration(exercise.getDuration());
			updatedExercise.setWeight(exercise.getWeight());
			updatedExercise.setNumReps(exercise.getNumReps());
			updatedExercise.setNumSets(exercise.getNumSets());
			updatedExercise.setPlace(exercise.getPlace());

			repo.saveAndFlush(updatedExercise);

		}
		return updatedExercise;
	}

	@Override
	public Exercise findExerciseById(Integer eid) {
		Exercise exercise = null;
		Optional<Exercise> opt = repo.findById(eid);
		if (opt.isPresent()) {
			exercise = opt.get();

		}
		return exercise;
	}
```
