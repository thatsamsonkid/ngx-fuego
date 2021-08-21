import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./home-page.component";
import { RouterModule } from "@angular/router";
import { HomePageRoutingModule } from "./home-page-routing.module";

@NgModule({
	declarations: [HomePageComponent],
	imports: [CommonModule, RouterModule, HomePageRoutingModule]
})
export class HomePageModule {}
