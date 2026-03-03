import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // Terefa em a Fazer
  private todoTask$ = new BehaviorSubject<any[]>([]);
  readonly todoTask = this.todoTask$.asObservable();
  // Tarefas fazendo
  private doingTask$ = new BehaviorSubject<any[]>([]);
  readonly doingTask = this.doingTask$.asObservable();
  // Tarefas em concluidos
  private doneTask$ = new BehaviorSubject<any[]>([]);
  readonly doneTask = this.doneTask$.asObservable();
}
