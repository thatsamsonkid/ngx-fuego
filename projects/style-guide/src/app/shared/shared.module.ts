import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardModule } from "fuego-ui";

@NgModule({
	declarations: [],
	imports: [CommonModule, CardModule],
	exports: [CardModule]
})
export class SharedModule {}
