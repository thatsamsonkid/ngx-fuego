import { AfterViewInit, Component, Injector, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ControlValueAccessorConnector } from '../form-fields/control-accessor-connector';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SearchBoxComponent,
      multi: true
    }
  ]
})
export class SearchBoxComponent extends ControlValueAccessorConnector implements OnInit, AfterViewInit, OnDestroy{

  @Input() label? : string;
  @Input() placeholder?: string;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void{}

  ngOnDestroy():void{}

}
