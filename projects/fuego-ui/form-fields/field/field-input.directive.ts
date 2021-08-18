import {
	Directive,
	ElementRef,
	HostBinding,
	HostListener,
	Input,
	OnChanges,
	OnDestroy,
	SimpleChanges
} from "@angular/core";
import { Subject } from "rxjs";

@Directive({
	selector: "[fieldInput]"
})
export class FieldInputDirective implements OnChanges {
	@Input() value: string = "";

	@HostListener("keyup", ["$event"])
	public onKeyup(event: KeyboardEvent): void {
		const value = (event.target as HTMLInputElement).value;
		// console.log(value);
		this.stateChanges.next(value);
	}

	@HostListener("blur", ["$event"])
	public onBlur(event: KeyboardEvent): void {}

	@HostListener("focus", ["$event"])
	public onFocus(event: KeyboardEvent): void {}

	ngOnChanges(changes: SimpleChanges) {
		// console.log(changes);
	}

	readonly stateChanges: Subject<any> = new Subject<any>();

	constructor(private el: ElementRef) {}
}
