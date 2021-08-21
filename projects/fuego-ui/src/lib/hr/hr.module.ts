import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HrComponent } from "./hr.component";

@NgModule({
	declarations: [HrComponent],
	imports: [CommonModule],
	exports: [HrComponent]
})
export class HrModule {}
