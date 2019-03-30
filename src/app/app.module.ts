import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {PagerService} from './pager.service';
import { EditNameComponent } from './edit-name/edit-name.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatDialogModule, MatInputModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EditNameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [PagerService],
  entryComponents: [AppComponent, EditNameComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
