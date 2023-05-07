import { Component, OnInit } from "@angular/core";

import { DesignsService } from "src/app/services/designs/designs.service";
import { MessagesService } from "src/app/services/messages/messages.service";
import { DesignEntity } from "src/app/interfaces/DesignEntity";

@Component({
  selector: "app-courseware",
  templateUrl: "./courseware.component.html",
  styleUrls: ["./courseware.component.css"],
})
export class CoursewareComponent implements OnInit {
  private nextDesignPage = "";

  constructor(
    private designsService: DesignsService,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {
    this.designsService.listAll(this.nextDesignPage).subscribe({
      next: (response: DesignEntity) => {
        if (response.hasNextPage) {
          this.nextDesignPage = response.nextCursor;
        } else {
          this.nextDesignPage = "";
        }
      },
      error: () => {
        this.messagesService.create(
          "Não foi possível buscar os designs! Por favor, recarregue a página.",
          "error"
        );
      },
    });
  }
}
