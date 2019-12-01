package com.skilldistillery.workout.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.fail;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class ExerciseTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Exercise exercise;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("Workout");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		exercise = em.find(Exercise.class, 6);
	}

	@AfterEach
	void tearDown() throws Exception {
		exercise = null;
		em.close();
	}


	@Test
	@DisplayName("entity mapping test name")
	void name() {
		assertNotNull(exercise);
		assertEquals("circuit", exercise.getName());
	}
	@Test
	@DisplayName("entity mapping test type")
	void type() {
		assertNotNull(exercise);
		assertEquals("weight endurance", exercise.getType());
	}
	@Test
	@DisplayName("entity mapping test duration")
	void duration() {
		assertNotNull(exercise);
		assertEquals(30, exercise.getDuration());
	}
	
	@Test
	@DisplayName("entity mapping test weight")
	void weight() {
		assertNotNull(exercise);
		assertEquals(45, exercise.getWeight());
	}
	@Test
	@DisplayName("entity mapping test reps")
	void reps() {
		assertNotNull(exercise);
		assertEquals(20, exercise.getNumReps());
	}
	@Test
	@DisplayName("entity mapping test sets")
	void sets() {
		assertNotNull(exercise);
		assertEquals(2, exercise.getNumSets());
	}
	@Test
	@DisplayName("entity mapping test place")
	void place() {
		assertNotNull(exercise);
		assertEquals("gym", exercise.getPlace());
	}
	

}
