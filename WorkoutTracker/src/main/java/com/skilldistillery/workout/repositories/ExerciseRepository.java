package com.skilldistillery.workout.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.workout.entities.Exercise;

public interface ExerciseRepository extends JpaRepository<Exercise, Integer> {
	
	Exercise findById(int eid);
	List<Exercise> findByName(String name);
	List<Exercise> findByTypeLike(String keyword);
	List<Exercise> findByPlace(String place);

}
