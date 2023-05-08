import { Component, Input } from "@angular/core";

import { Design } from "src/app/interfaces/Design";

@Component({
  selector: "app-design[design]",
  templateUrl: "./design.component.html",
  styleUrls: ["./design.component.css"],
})
export class DesignComponent {
  @Input() design!: Design;

  getPages(): string {
    if (!this.design.pages || this.design.pages?.length === 1) {
      return "1 Slide";
    }

    return `${this.design.pages?.length} Slides`;
  }

  getTitle(): string {
    if (!this.design.title) return "Sem título";

    if (this.design.title.length <= 30) return this.design.title;

    return this.design.title.slice(0, 30) + "...";
  }
}
