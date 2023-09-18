import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { TodoDashComponent } from './todo-dash/todo-dash.component';

const routes: Routes = [
  {path:'', component:TodoDashComponent},
  {path:'todo',component:TodoDashComponent},
  {path:'pomodoro',component:PomodoroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
