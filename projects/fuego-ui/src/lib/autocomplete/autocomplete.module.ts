import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AutocompleteComponent } from "./autocomplete.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FieldModule } from "../form-fields/field/field.module";
import { ValueExtractorPipe } from './value-extractor.pipe';

@NgModule({
	declarations: [AutocompleteComponent, ValueExtractorPipe],
	imports: [CommonModule, ReactiveFormsModule, FieldModule],
	exports: [AutocompleteComponent]
})
export class AutocompleteModule {}
