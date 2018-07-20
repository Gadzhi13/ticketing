import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'tsys-invalid-form-dialog',
  templateUrl: './invalid-form-dialog.component.html',
  styleUrls: ['./invalid-form-dialog.component.css']
})
export class InvalidFormDialogComponent {
  constructor(public dialogReference: MatDialogRef<InvalidFormDialogComponent>) {}
}
