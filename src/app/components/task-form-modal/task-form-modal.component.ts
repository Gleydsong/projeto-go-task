import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { ITaskFormModalData } from '../../interfaces/task-form-modal-data.interface';
import { ItaskFormControls } from '../../interfaces/task-form-controls.interface';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-task-form-modal',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './task-form-modal.component.html',
  styleUrls: ['./task-form-modal.component.css'],
})
export class TaskFormModalComponent {
  readonly _data: ITaskFormModalData = inject(DIALOG_DATA);
  readonly _dialogRef = inject(DialogRef);
  taksform: FormGroup = new FormGroup({
    name: new FormControl(this._data.formvalues.name, [
      Validators.required,
      Validators.minLength(10),
    ]),
    description: new FormControl(this._data.formvalues.description, [
      Validators.required,
      Validators.minLength(50),
    ]),
  });
  onformsubmit() {
    this.closeModal(this.taksform.value);
  }

  closeModal(formValues: ItaskFormControls | undefined = undefined) {
    this._dialogRef.close(formValues);
  }
}
