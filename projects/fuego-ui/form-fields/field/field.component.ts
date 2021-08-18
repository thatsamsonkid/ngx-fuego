import { coerceBooleanProperty } from "@angular/cdk/coercion";
import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ContentChild,
	EventEmitter,
	Injector,
	Input,
	OnDestroy,
	OnInit,
	Output
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ControlValueAccessorConnector } from "../control-accessor-connector";
import { FieldErrorDirective } from "./field-error.directive";
import { FieldHintDirective } from "./field-hint.directive";
import { FieldLabelDirective } from "./field-label.directive";
import { FieldPrefixDirective } from "./field-prefix.directive";

let id = 0;
@Component({
	selector: "hmdva-field",
	templateUrl: "./field.component.html",
	styleUrls: ["./field.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: FieldComponent,
			multi: true
		}
	]
})
export class FieldComponent
	extends ControlValueAccessorConnector
	implements OnInit, AfterViewInit, OnDestroy {
	@Input() floatLabel: boolean = false;
	@Input() hasPlaceholder: boolean = false;
	@Input() className: string = "";

	@Input() ariaAutocomplete?: string;
	@Input() ariaControls?: string;
	@Input() ariaLabelledby?: string;

	//Input Specific
	@Input() placeholder: string = "";
	@Input() type?: string;
	@Input() nativeAutocomplete: string = "none";
	@Input() activeDescendant$?: Observable<string>;
	@Input() required: boolean = false;

	@Input()
	get labelHidden(): boolean {
		return this._labelHidden;
	}
	set labelHidden(value: boolean) {
		this._labelHidden = coerceBooleanProperty(value);
	}
	private _labelHidden: boolean = false;

	@Output() hasFocus = new EventEmitter<boolean>();
	@Output() keyDownEvent = new EventEmitter<KeyboardEvent>();

	@ContentChild(FieldPrefixDirective) prefixContent?: FieldPrefixDirective;
	@ContentChild(FieldLabelDirective) labelContent?: FieldLabelDirective;
	@ContentChild(FieldErrorDirective) errorContent?: FieldErrorDirective;
	@ContentChild(FieldHintDirective) hintContent?: FieldHintDirective;

	id: string = `sm-field-${id++}`;

	disabled: boolean = false;

	isFocused = false;
	hasPrefix = false;
	hasSuffix = false;
	unsubscribe = new Subject<boolean>();

	activedescendant: string | null = null;

	constructor(injector: Injector, private cd: ChangeDetectorRef) {
		super(injector);
	}

	ngOnInit(): void {
		this.hasPlaceholder = !!this.placeholder;
		this.type = this.type ? this.type : "text";
		if (this.activeDescendant$) {
			this.activeDescendant$
				.pipe(takeUntil(this.unsubscribe))
				.subscribe((val) => (this.activedescendant = val));
		}
	}

	ngAfterViewInit(): void {
		this.hasPrefix = !!this.prefixContent;
		setTimeout(() => {
			this.cd.detectChanges();
		}, 10);
	}

	ngOnDestroy(): void {
		this.unsubscribe.next(true);
		this.unsubscribe.complete();
	}

	onFocusEvent(e: any): void {
		this.isFocused = true;
		this.hasFocus.emit(true);
	}

	onBlurEvent(e: any): void {
		this.isFocused = false;
		this.hasFocus.emit(false);
	}

	onKeyDown(e: KeyboardEvent): void {
		// console.log(e);
		this.keyDownEvent.emit(e);
	}
}
