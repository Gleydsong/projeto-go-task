import { inject, Injectable } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { TaskFormModalComponent } from '../components/task-form-modal/task-form-modal.component';
import { TaskCommentsModalComponent } from '../components/task-comments-modal/task-comments-modal.component';
import { ItaskFormControls } from '../interfaces/task-form-controls.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalControllerService {
  private readonly modalSizeOpction = {
    maxWidth: '620px',
    width: '100%',
  };
  private readonly _dialog = inject(Dialog);

  openNewTaskModal() {
    return this._dialog.open(TaskFormModalComponent, {
      ...this.modalSizeOpction,
      data: {
        mode: 'create',
        formvalues: {
          name: '',
          description: '',
        } as ItaskFormControls,
      },
    });
  }

  openEditTaskModal(formvalues?: ItaskFormControls) {
    return this._dialog.open(TaskFormModalComponent, {
      ...this.modalSizeOpction,
      data: {
        mode: 'edit',
        formvalues: {
          name: formvalues?.name ?? '',
          description: formvalues?.description ?? '',
        },
      },
    });
  }

  openTaskCommentsModal() {
    return this._dialog.open(TaskCommentsModalComponent, {
      ...this.modalSizeOpction,
    });
  }
}
