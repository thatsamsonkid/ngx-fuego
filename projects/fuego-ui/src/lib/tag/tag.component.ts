import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hmdva-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  @Input() className: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
