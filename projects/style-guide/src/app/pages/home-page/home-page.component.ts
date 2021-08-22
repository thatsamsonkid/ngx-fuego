import { Component, OnInit } from "@angular/core";
import { PAGES } from "../../core/constants/pages";

@Component({
	selector: "app-home-page",
	templateUrl: "./home-page.component.html",
	styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
	pages: Array<any> = [];
	constructor() {}

	ngOnInit(): void {
		this.pages = PAGES;
	}
}
