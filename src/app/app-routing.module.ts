import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PersonComponent } from './components/person/person.component';
import { TaskFormComponent } from './components/task/task-form/task-form.component';

const routes: Routes = [
  {
    path: "", component: DashboardComponent,
    children: [
      {
        path: "task", component: TaskFormComponent
      },
      {
        path: "person", component: PersonComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
