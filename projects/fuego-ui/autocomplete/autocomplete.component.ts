import { coerceBooleanProperty } from "@angular/cdk/coercion";
import {
	AfterViewInit,
	Component,
	Injector,
	Input,
	OnDestroy,
	OnInit,
	ViewEncapsulation
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { BehaviorSubject, Observable, of, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ControlValueAccessorConnector } from "../form-fields/control-accessor-connector";

let id = 0;

@Component({
	selector: "hmdva-autocomplete",
	templateUrl: "./autocomplete.component.html",
	styleUrls: ["./autocomplete.component.scss"],
	encapsulation: ViewEncapsulation.None,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: AutocompleteComponent,
			multi: true
		}
	]
})
export class AutocompleteComponent
	extends ControlValueAccessorConnector
	implements OnInit, AfterViewInit, OnDestroy
{
	@Input() label?: string;
	@Input() placeholder?: string;
	@Input() options: Observable<Array<any>> = of([]);

	@Input() labelKey?: string = "";
	@Input() valueKey?: string = "";

	id: string = `autocomplete-${id++}`;
	listboxId: string = "";
	labelId: string = "";
	expanded: boolean = false;
	activeElement: any;

	activeDescendant: BehaviorSubject<string> = new BehaviorSubject<string>("");

	unsubscribe = new Subject<boolean>();

	@Input()
	get labelHidden(): boolean {
		return this._labelHidden;
	}
	set labelHidden(value: boolean) {
		this._labelHidden = coerceBooleanProperty(value);
	}
	private _labelHidden: boolean = false;

	constructor(injector: Injector) {
		super(injector);
		this.listboxId = `${this.id}-listbox`;
		this.labelId = `${this.id}-label`;
	}

	ngOnInit(): void {
		if (this.options) {
			this.options.pipe(takeUntil(this.unsubscribe)).subscribe((val) => {
				console.log(val);
			});
		}
	}

	onFieldFocus($event: boolean): void {
		this.expanded = $event;
	}

	onSelection(option: any): void {
		console.log(option);
		this.expanded = false;
		if (this.valueKey) {
			this.control.setValue(option[this.valueKey]);
		}
	}

	onKeyEvent($event: KeyboardEvent): void {
		console.log($event);
		switch ($event.key) {
			case "ArrowUp":
				break;
			case "ArrowDown":
				break;
			case "ArrowLeft":
				break;
			case "ArrowRight":
				break;
			default:
				break;
		}
	}

	setActiveOption(): void {
		if (this.activeElement) {
		} else {
			this.activeElement = 0;
			this.activeDescendant.next(`${this.id}option-0`);
		}
	}

	ngAfterViewInit(): void {}

	ngOnDestroy(): void {
		this.unsubscribe.next(true);
		this.unsubscribe.complete();
	}
}
