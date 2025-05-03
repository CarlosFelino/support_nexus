import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss']
})
export class ProfileModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ProfileModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSave(): void {
    this.dialogRef.close(this.data.user);
  }
}