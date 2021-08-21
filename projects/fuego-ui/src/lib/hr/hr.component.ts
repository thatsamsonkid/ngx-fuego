import { Component, Input } from '@angular/core';

@Component({
  selector: 'hmdva-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.scss']
})
export class HrComponent{

  @Input() className:string = '';
}
