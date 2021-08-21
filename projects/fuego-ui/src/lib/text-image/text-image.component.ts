import {
	AfterViewInit,
	Component,
	Input,
	OnDestroy,
	OnInit,
	ViewChild
} from "@angular/core";
import { WindowService } from "fuego-core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
	selector: "fue-text-image",
	templateUrl: "./text-image.component.html",
	styleUrls: ["./text-image.component.scss"]
})
export class TextImageComponent implements OnInit, AfterViewInit, OnDestroy {
	@Input() imgSrc: string = "";
	@Input() imgAlt: string = "";
	@Input() matchHeight: boolean = false;

	@Input() imgRatio: number = 0.66;

	@ViewChild("textContainer") textContainer: any;
	@ViewChild("text") text: any;

	imgHeight: number = 0;

	unsubscribe = new Subject<boolean>();

	constructor(private window: WindowService) {}

	ngOnInit(): void {
		this.window
			.observeResize()
			.pipe(takeUntil(this.unsubscribe))
			.subscribe((val) => this.setMatchedHeight());
	}

	setMatchedHeight(): void {
		if (this.matchHeight && this.textContainer) {
			this.imgHeight =
				this.textContainer.nativeElement.childNodes[0].clientHeight;
		}
	}

	ngAfterViewInit(): void {
		if (this.textContainer) {
			setTimeout(() => {
				this.setMatchedHeight();
			}, 100);
		}
	}

	ngOnDestroy(): void {
		this.unsubscribe.next(true);
		this.unsubscribe.complete();
	}
}
