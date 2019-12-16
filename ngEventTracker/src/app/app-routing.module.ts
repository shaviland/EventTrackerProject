import { ExerciseListComponent } from './components/exercise-list/exercise-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './components/add/add.component';


const routes: Routes = [
  {path: '', component: ExerciseListComponent},
  {path: 'home', component: ExerciseListComponent},
  {path: 'add', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
