import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './upload-data/components/error/error.component';
import { SuccessComponent } from './upload-data/components/success/success.component';
import { UploadDataComponent } from './upload-data/upload-data.component';

const routes: Routes = [
  { path: '', redirectTo: 'upload', pathMatch: 'full' },
  { path: 'upload', component: UploadDataComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'error', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
