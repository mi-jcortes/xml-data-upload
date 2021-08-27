import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.component.html',
  styleUrls: ['./upload-data.component.scss'],
  providers: [NgbCarouselConfig]
})
export class UploadDataComponent {

  @ViewChild('carousel')
  carousel!: NgbCarousel;

  public uploadForm: FormGroup;
  private file!: File;

  constructor(
    formBuilder: FormBuilder,
    public router: Router
  ) {
    this.uploadForm = formBuilder.group({
      issuerTaxId: [null, Validators.required],
      range: formBuilder.group({
        from: [null, Validators.required],
        to: [null, Validators.required]
      }),
      authorizationDate: [null, Validators.required],
      file: formBuilder.group({
        mime: [null, Validators.required],
        fileName: [null],
        data: [null, Validators.required]
      }),
    });
  }

  ngAfterViewInit() {
    this.carousel.pause();
  }

  succesFileUpload(file: File) {
    this.file = file;
    this.carousel.next();
  }

  saveData() {
    console.info(this.uploadForm.value);
    console.info(this.file);
    setTimeout(() => this.router.navigate(["/success"]), 1000);
  }

}
