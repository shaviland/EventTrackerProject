package com.skilldistillery.workout.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.workout.entities.Exercise;
import com.skilldistillery.workout.services.ExerciseService;

@RestController
@RequestMapping("api")
public class ExerciseController {
	@Autowired
	private ExerciseService svc;

//	List<Exercise>	GET api/exercises	Gets all exercises
	@GetMapping("exercises")
	public List<Exercise> listexercises() {
		return svc.listAllExercises();
	}

// Exercise GET api/exercise Gets exercise by id

	@GetMapping("exercises/{eid}")
	public Exercise exerciseById(@PathVariable("eid") Integer eid, HttpServletResponse resp) {
		Exercise exercise = svc.findExerciseById(eid);
		if (exercise == null) {
			resp.setStatus(404);
		}
		return exercise;

	}

	@PostMapping("exercises")
	public Exercise createExercise(@RequestBody Exercise exercise, HttpServletRequest req, HttpServletResponse resp) {

		try {
			exercise = svc.addExercise(exercise);
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(exercise.getId());
			resp.addHeader("Location", url.toString());
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
			return null;
		}

		return exercise;

	}

	@PutMapping("exercises/{eid}")
	public Exercise updateExercise(@PathVariable("eid") Integer eid, @RequestBody Exercise exercise,
			HttpServletResponse resp) {

		try {
			exercise = svc.updateExercise(eid, exercise);
			if (exercise == null) {
				resp.setStatus(404);
			}

		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
			exercise = null;
		}

		return exercise;

	}
	@DeleteMapping("exercises/{eid}")
	public void deleteExercise(@PathVariable("eid") Integer eid, HttpServletResponse resp) {
		try {
			boolean deleted = svc.delete(eid);
			if(deleted) {
				resp.setStatus(204);
			}else {
				resp.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
		}
	}

}
