import { ItaskFormControls } from './task-form-controls.interface';

export interface ITaskFormModalData {
  mode: 'create' | 'edit';
  formvalues: ItaskFormControls;
}
