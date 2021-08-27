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
  success: EventEmitter<File> = new EventEmitter();

  @Output()
  next: EventEmitter<boolean> = new EventEmitter();

  private file!: File;

  constructor() { }

  ngOnInit(): void { }

  onChange(event: any) {
    this.file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = () => {
      parseString(fileReader.result || "error", (error, result) => {
        if (error) console.error("Algo ha ocurrido al parsear los datos", error);
        else {
          const data = result.AUTORIZACION.CAF[0].DA[0];
          this.uploadForm.patchValue({
            issuerTaxId: data.RE[0],
            authorizationDate: data.FA[0]
          });
          this.uploadForm.controls.range.patchValue({
            from: data.RNG[0].D[0],
            to: data.RNG[0].H[0]
          });
          this.uploadForm.controls.file.patchValue({
            mime: "@file/xml",
            fileName: event.target.files[0].name,
            data: btoa(JSON.stringify(result.AUTORIZACION))
          });
          if (this.uploadForm.valid) this.success.emit(this.file);
        }
      })
    };
    fileReader.readAsText(event.target.files[0]);
  }

}
