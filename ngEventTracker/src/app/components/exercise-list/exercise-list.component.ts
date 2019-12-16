import { ExerciseService } from 'src/app/services/exercise.service';
import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/models/exercise';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {
  // FIELDS
  exercises: Exercise[] = [];
  selected: Exercise = null;
  updateExercise: Exercise = null;


  // CONSTRUCTORS
  constructor(private exSvc: ExerciseService) {

  }

  // METHODS
  ngOnInit() {
    this.displayExercises();
  }
  displayExercises() {

    this.exSvc.index().subscribe(
      data => {
        this.exercises = data;
      },
      err => {
        console.error('ExerciseListComponent: error displaying all');
        console.log(err);
      }

    );

  }
  selectExercise(exercise: Exercise) {
    this.selected = exercise;

  }
  displayAll() {
    this.selected = null;
  }
  setedit() {
    this.updateExercise = Object.assign({}, this.selected);
  }
  editExercise(exercise: Exercise) {
    console.log(exercise);
    this.exSvc.updateTodo(exercise).subscribe(
      data => {
        this.displayExercises();
        this.updateExercise = null;
        this.selected = null;
      },
      err => {
        console.error('exerciseListComponent.editExercise(): error updating exercise');
        console.error(err);
      }

    );
  }
  deleteExercise(id: number) {
    this.exSvc.delete(id).subscribe(
      data => {
        this.displayExercises();
        this.selected = null;
      },
      err => {
        console.error('exerciseListComponent.deleteExercise: error deleting exercise');
        console.error(err);

      }
    );
  }

  getAveWorkoutDuration() {
    let workoutTotal = 0;
    for (const exercise of this.exercises) {
      console.log(exercise.duration);
      workoutTotal += exercise.duration;
    }
    console.log(workoutTotal);
    const avgDuration = workoutTotal / this.exercises.length;
    return avgDuration;
  }

}

