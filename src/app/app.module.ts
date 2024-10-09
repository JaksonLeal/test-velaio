import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { PersonComponent } from './components/person/person.component';
import { CreatePersonComponent } from './components/person/create-person/create-person.component';
import { CreateTaskComponent } from './components/task/create-task/create-task.component';
import { ListTaskComponent } from './components/task/list-task/list-task.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    PersonComponent,
    CreatePersonComponent,
    CreateTaskComponent,
    ListTaskComponent,
    SidebarComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
