import { Component, Input } from "@angular/core";

@Component({
  selector: "app-unimplemented-page[returnToPath]",
  templateUrl: "./unimplemented-page.component.html",
  styleUrls: ["./unimplemented-page.component.css"],
})
export class UnimplementedPageComponent {
  @Input() returnToPath: string = "";
}
