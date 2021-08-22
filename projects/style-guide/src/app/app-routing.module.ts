import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "typography",
		loadChildren: () =>
			import("./pages/typography-page/typography-page.module").then(
				(m) => m.TypographyPageModule
			),
		pathMatch: "full"
	},
	{
		path: "",
		loadChildren: () =>
			import("./pages/home-page/home-page.module").then(
				(m) => m.HomePageModule
			),
		pathMatch: "full"
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
