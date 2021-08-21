import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchBoxComponent } from "./search-box.component";
import { FieldModule } from "../form-fields/field/field.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
	declarations: [SearchBoxComponent],
	imports: [CommonModule, FieldModule, ReactiveFormsModule],
	exports: [SearchBoxComponent]
})
export class SearchBoxModule {}
