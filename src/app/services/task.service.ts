import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItaskFormControls } from '../interfaces/task-form-controls.interface';
import { ITask } from '../interfaces/task.interface';
import { TaskStatusEnum } from '../enums/task-status.enum';
import { generateUniqueIdWithTimestamp } from '../../utils/generate-unique-id-with-timesstamp';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // Terefa em a Fazer
  private todoTask$ = new BehaviorSubject<ITask[]>([]);
  readonly todoTask = this.todoTask$.asObservable();
  // Tarefas fazendo
  private doingTask$ = new BehaviorSubject<ITask[]>([]);
  readonly doingTask = this.doingTask$.asObservable();
  // Tarefas em concluidos
  private doneTask$ = new BehaviorSubject<ITask[]>([]);
  readonly doneTask = this.doneTask$.asObservable();

  addTask(taskInfos: ItaskFormControls) {
    const newTask: ITask = {
      ...taskInfos,
      status: TaskStatusEnum.TODO,
      id: generateUniqueIdWithTimestamp(),
      comments: [],
    };

    const currentList = this.todoTask$.value;

    this.todoTask$.next([...currentList, newTask]);
  }
}
