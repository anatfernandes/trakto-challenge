import { Component, Input } from "@angular/core";
import { Loading } from "src/app/interfaces/Loading";

@Component({
  selector: "app-loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.css"],
})
export class LoadingComponent {
  @Input() type: Loading["type"] = "default";
  @Input() size: Loading["size"] = "normal";

  getDiameter(): number {
    if (this.size === "small") return 16;
    return 36;
  }
}
