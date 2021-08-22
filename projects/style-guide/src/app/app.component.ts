import { Component, OnInit } from "@angular/core";
import { PAGES } from "./core/constants/pages";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
	title = "style-guide";

	pages: Array<any> = [];
	constructor() {}

	ngOnInit(): void {
		this.pages = PAGES;
	}
}
