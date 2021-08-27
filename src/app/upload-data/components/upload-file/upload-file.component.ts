import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { parseString } from 'xml2js';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  @Input("form")
  uploadForm!: FormGroup;

  @Output()
  success: EventEmitter<boolean> = new EventEmitter();

  @Output()
  next: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: any) {
    this.uploadForm?.controls.file.setValue(event.target.files[0]);
    this.uploadForm.controls.fileName.setValue(event.target.files[0].name);
    let fileReader = new FileReader();
    fileReader.onload = () => {
      parseString(fileReader.result || "error", (error, result) => {
        if (error) console.error("Algo ha ocurrido al parsear los datos", error);
        else {
          const data = result.AUTORIZACION.CAF[0].DA[0];
          this.uploadForm.patchValue({
            issuerTaxId: data.RE[0],
            rangeFrom: data.RNG[0].D[0],
            rangeTo: data.RNG[0].H[0],
            authorizationDate: data.FA[0],
            base64: btoa(JSON.stringify(result.AUTORIZACION))
          });
          if (this.uploadForm.valid) this.success.emit(true);
        }
      })
    };
    fileReader.readAsText(event.target.files[0]);
  }
}
