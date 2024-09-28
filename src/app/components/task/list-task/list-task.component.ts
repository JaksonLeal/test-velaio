import { Component } from '@angular/core';
import { map } from 'rxjs';
import { TaskService } from 'src/app/service/task-service.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent {
  tasks$ = this.taskService.tasks$;
  filter: 'all' | 'completed' | 'pending' = 'all';

  constructor(private taskService: TaskService) { }

  filterTasks() {
    switch (this.filter) {
      case 'completed':
        return this.taskService.tasks$.pipe(
          map(tasks => tasks.filter(task => task.isCompleted))
        );
      case 'pending':
        return this.taskService.tasks$.pipe(
          map(tasks => tasks.filter(task => !task.isCompleted))
        );
      default:
        return this.tasks$;
    }
  }
    toggleCompletion(taskId: number) {
    // Implementar cambio de estado de la tarea
  }
}
