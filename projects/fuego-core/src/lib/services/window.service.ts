import { Inject, Injectable } from "@angular/core";
import { fromEvent, Observable } from "rxjs";
import { share, throttleTime } from "rxjs/operators";
import { WINDOW as WidowToken } from "@ng-web-apis/common";

@Injectable()
export class WindowService {
	constructor(@Inject(WidowToken) readonly windowRef: Window) {}

	observeResize(): Observable<Event> {
		return fromEvent(this.windowRef, "resize").pipe(
			throttleTime(250),
			share()
		);
	}
}
