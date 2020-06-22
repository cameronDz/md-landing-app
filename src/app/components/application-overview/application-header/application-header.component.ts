import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'md-application-header',
  templateUrl: './application-header.component.html',
  styleUrls: ['./application-header.component.scss']
})
export class ApplicationHeaderComponent implements OnInit {

  @Input() title: string = '';

  constructor() {}

  ngOnInit(): void {}

}
