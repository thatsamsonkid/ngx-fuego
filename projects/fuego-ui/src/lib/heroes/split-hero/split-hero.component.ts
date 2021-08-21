import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'split-hero',
  templateUrl: './split-hero.component.html',
  styleUrls: ['./split-hero.component.scss']
})
export class SplitHeroComponent implements OnInit {

  @Input() bckImg: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
