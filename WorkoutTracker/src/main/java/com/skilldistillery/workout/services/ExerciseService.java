package com.skilldistillery.workout.services;

import java.util.List;

import com.skilldistillery.workout.entities.Exercise;

public interface ExerciseService {
	List<Exercise> listAllExercises();
	Exercise addExercise(Exercise exercise);
	boolean delete(Integer eid);
	Exercise updateExercise(Integer eid, Exercise exercise);
	Exercise findExerciseById(Integer eid);
	int findAvgWorkoutTime();

}
