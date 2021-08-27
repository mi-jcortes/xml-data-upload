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

  public uploadForm: FormGroup;
  @ViewChild('carousel') carousel!: NgbCarousel;

  constructor(
    formBuilder: FormBuilder,
    public router: Router
  ) {
    this.uploadForm = formBuilder.group({
      issuerTaxId: [null, Validators.required],
      rangeFrom: [null, Validators.required],
      rangeTo: [null, Validators.required],
      authorizationDate: [null, Validators.required],
      file: [null, Validators.required],
      fileName: [null],
      base64: [null, Validators.required]
    });
  }

  ngAfterViewInit() {
    this.carousel.pause();
  }

  succesFileUpload() {
    this.carousel.next();
  }

  saveData() {
    console.info(this.uploadForm.value);
    setTimeout(() => this.router.navigate(["/success"]), 1000);
  }
}
