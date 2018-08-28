import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-si-accordion',
  templateUrl: './si-accordion.component.html',
  styleUrls: ['./si-accordion.component.scss']
})
export class SiAccordionComponent implements OnInit {
  @Input()
  title: string;
  collapsed = true;

  constructor() { }

  toggle() {
    this.collapsed = !this.collapsed;
  }

  ngOnInit() {
  }
}
