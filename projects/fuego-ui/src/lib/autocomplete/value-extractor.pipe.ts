import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "valueExtractor"
})
export class ValueExtractorPipe implements PipeTransform {
	transform(value: any, key: any): string {
		if (typeof value === "object" && value !== null && key && value[key]) {
			return value[key];
		}
		return "";
	}
}
