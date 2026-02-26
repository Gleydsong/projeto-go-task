import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { ITaskFormModalData } from '../../interfaces/task-form-modal-data.interface';
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
  onformsubmit() {}
}
