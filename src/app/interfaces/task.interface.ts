import { ItaskFormControls } from './task-form-controls.interface';
import { TaskStatusEnum } from '../enums/task-status.enum';

export interface ITask extends ItaskFormControls {
  id: string;
  status: TaskStatusEnum;
  comments: string[];
}
