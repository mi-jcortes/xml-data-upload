import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadDataComponent } from './upload-data/upload-data.component';
import { UploadFileComponent } from './upload-data/components/upload-file/upload-file.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataResumeComponent } from './upload-data/components/data-resume/data-resume.component';
import { SuccessComponent } from './upload-data/components/success/success.component';
import { ErrorComponent } from './upload-data/components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadDataComponent,
    UploadFileComponent,
    DataResumeComponent,
    SuccessComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
