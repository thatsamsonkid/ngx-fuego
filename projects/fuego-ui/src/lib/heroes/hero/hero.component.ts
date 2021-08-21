import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "fue-hero",
	templateUrl: "./hero.component.html",
	styleUrls: ["./hero.component.scss"]
})
export class HeroComponent implements OnInit {
	@Input() bckImg: string = "";

	constructor() {}

	ngOnInit(): void {}
}
