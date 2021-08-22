import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./home-page.component";
import { RouterModule } from "@angular/router";
import { HomePageRoutingModule } from "./home-page-routing.module";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
	declarations: [HomePageComponent],
	imports: [CommonModule, RouterModule, HomePageRoutingModule, SharedModule]
})
export class HomePageModule {}
