import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TextImageComponent } from "./text-image.component";
import { ImageModule } from "../image/image.module";

@NgModule({
	declarations: [TextImageComponent],
	imports: [CommonModule, ImageModule],
	exports: [TextImageComponent]
})
export class TextImageModule {}
