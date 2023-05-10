import { Component, OnInit } from "@angular/core";

import { Design } from "src/app/interfaces/Design";
import { DesignEntity } from "src/app/interfaces/DesignEntity";
import { DesignsService } from "src/app/services/designs/designs.service";
import { MessagesService } from "src/app/services/messages/messages.service";

@Component({
  selector: "app-courseware-all",
  templateUrl: "./courseware-all.component.html",
  styleUrls: ["./courseware-all.component.css"],
})
export class CoursewareAllComponent implements OnInit {
  designs: Design[] = [];

  constructor(
    private designsService: DesignsService,
    private messagesService: MessagesService
  ) {}

  ngOnInit() {
    this.designsService.listAll().subscribe({
      next: (response: DesignEntity) => {
        this.designs = response.data;
      },
      error: () => {
        this.messagesService.create(
          "Não foi possível carregar os designs! Por favor, tente novamente.",
          "error"
        );
      },
    });
  }
}
