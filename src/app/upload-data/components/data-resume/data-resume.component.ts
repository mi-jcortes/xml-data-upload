import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-resume',
  templateUrl: './data-resume.component.html',
  styleUrls: ['./data-resume.component.scss']
})
export class DataResumeComponent implements OnInit {

  @Input("form")
  uploadForm!: FormGroup;

  @Output()
  back: EventEmitter<boolean> = new EventEmitter();

  @Output()
  save: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

}
