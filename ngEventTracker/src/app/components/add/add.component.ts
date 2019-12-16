import { Component, OnInit } from '@angular/core';
import { ExerciseService } from 'src/app/services/exercise.service';
import { Exercise } from 'src/app/models/exercise';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  // FIELDS
  newExercise: Exercise = new Exercise();
  success = false;

  // CONSTRUCTORS
  constructor(private exSvc: ExerciseService) { }


  // METHODS
  ngOnInit() {
  }
  addExercise(exercise: Exercise) {
    this.exSvc.create(exercise).subscribe(
      data => {
        // this.displayExercises();
        this.success = true;
        this.newExercise = new Exercise();
      },
      err => {
        console.error('ExerciseAdd.addExercise: error loading adding exercise');
        console.error(err);
      }
    );


  }
}
