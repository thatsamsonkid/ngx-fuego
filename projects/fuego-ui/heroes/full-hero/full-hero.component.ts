import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnInit
} from "@angular/core";

@Component({
	selector: "hmdva-full-hero",
	templateUrl: "./full-hero.component.html",
	styleUrls: ["./full-hero.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullHeroComponent {
	@Input() imgSrc: string = "";
	@Input() imgAlt: string = "";
	@Input() className: string = "";

	constructor() {}
}
