package com.skilldistillery.workout.data;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.workout.entities.Exercise;
import com.skilldistillery.workout.repositories.ExerciseRepository;
import com.skilldistillery.workout.services.ExerciseService;

@Service
public class ExerciseServiceImpl implements ExerciseService {

	@Autowired
	private ExerciseRepository repo;

	@Override
	public List<Exercise> listAllExercises() {
		return repo.findAll();
	}

	@Override
	public Exercise addExercise(Exercise exercise) {
		if (exercise != null) {
			repo.saveAndFlush(exercise);
		}
		return exercise;
	}

	@Override
	public boolean delete(Integer eid) {
		boolean deleted = false;
		if (repo.existsById(eid)) {
			repo.deleteById(eid);
			deleted = true;

		}
		return deleted;
	}

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

	@Override
	public int findAvgWorkoutTime() {
		List<Exercise> workouts = repo.findAll();
		int workoutTimeTotal = 0;
		for(Exercise workout : workouts) {
			workoutTimeTotal += workout.getDuration();
		}
		int workoutAvg = workoutTimeTotal/workouts.size();
		return workoutAvg;
	}

}
