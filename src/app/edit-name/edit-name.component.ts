import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-name',
  templateUrl: './edit-name.component.html',
  styleUrls: ['./edit-name.component.css']
})
export class EditNameComponent implements OnInit {
  private name: String;
  constructor(public dialogueRef: MatDialogRef<EditNameComponent>, @Inject(MAT_DIALOG_DATA) public data: String) {

  }

  ngOnInit() {
  }
  onConfirmClick() {
    this.dialogueRef.close({ 'name': this.name });
  }
  onNoClick() {
    this.dialogueRef.close();
  }
}
