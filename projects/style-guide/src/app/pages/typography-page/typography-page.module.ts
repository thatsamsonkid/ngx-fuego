import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TypographyPageComponent } from "./typography-page.component";
import { TypographyPageRoutingModule } from "./typography-page-routing.module";

@NgModule({
	declarations: [TypographyPageComponent],
	imports: [CommonModule, TypographyPageRoutingModule]
})
export class TypographyPageModule {}
