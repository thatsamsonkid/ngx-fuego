import {
	AfterViewInit,
	Component,
	ElementRef,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	SimpleChanges,
	ViewChild,
	ViewEncapsulation
} from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { WindowService } from "src/app/core/services/window.service";

@Component({
	selector: "hmdva-image",
	templateUrl: "./image.component.html",
	styleUrls: ["./image.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class ImageComponent
	implements OnInit, AfterViewInit, OnChanges, OnDestroy {
	@Input() src: string = "";
	@Input() alt: string = "";
	@Input() ratio: number = 0.75;
	@Input() className = "";
	@Input() enforcedHeight = 0;

	@ViewChild("image") imageRef?: ElementRef;

	height: number = 0;

	unsubscribe = new Subject<boolean>();

	constructor(private windowService: WindowService) {}

	ngOnInit(): void {
		this.ratio = this.ratio ? this.ratio : 0.75;
		if (this.enforcedHeight && this.enforcedHeight >= 0) {
			this.windowService
				.observeResize()
				.pipe(takeUntil(this.unsubscribe))
				.subscribe((val) => {
					const imageWidth = this.imageRef?.nativeElement.width;
					this.height = imageWidth * this.ratio;
				});
		}
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.setEnforcedHeight();
	}

	setEnforcedHeight(): void {
		if (this.enforcedHeight > 0) {
			this.height = this.enforcedHeight;
		}
	}

	ngAfterViewInit(): void {
		if (this.imageRef) {
			// Change this to just listen to width changes
			setTimeout(() => {
				const imageWidth = this.imageRef?.nativeElement.width;
				this.height = imageWidth * this.ratio;
				this.setEnforcedHeight();
			}, 100);
		}
	}

	ngOnDestroy(): void {
		this.unsubscribe.next(true);
		this.unsubscribe.complete();
	}
}
