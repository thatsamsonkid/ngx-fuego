import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FieldComponent } from "./field.component";
import { FieldSuffixDirective } from "./field-suffix.directive";
import { FieldPrefixDirective } from "./field-prefix.directive";
import { FieldHintDirective } from "./field-hint.directive";
import { FieldErrorDirective } from "./field-error.directive";
import { FieldInputDirective } from "./field-input.directive";
import { FieldLabelDirective } from "./field-label.directive";
import { FieldPlaceholderDirective } from "./field-placeholder.directive";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
	declarations: [
		FieldComponent,
		FieldSuffixDirective,
		FieldPrefixDirective,
		FieldHintDirective,
		FieldErrorDirective,
		FieldInputDirective,
		FieldErrorDirective,
		FieldInputDirective,
		FieldLabelDirective,
		FieldPlaceholderDirective
	],
	imports: [CommonModule, ReactiveFormsModule],
	exports: [
		FieldComponent,
		FieldSuffixDirective,
		FieldPrefixDirective,
		FieldHintDirective,
		FieldErrorDirective,
		FieldInputDirective,
		FieldErrorDirective,
		FieldInputDirective,
		FieldLabelDirective,
		FieldPlaceholderDirective
	]
})
export class FieldModule {}
