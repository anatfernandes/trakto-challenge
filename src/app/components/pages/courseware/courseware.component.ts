import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

import { DesignsService } from "src/app/services/designs/designs.service";
import { MessagesService } from "src/app/services/messages/messages.service";
import { DesignEntity } from "src/app/interfaces/DesignEntity";
import { Design } from "src/app/interfaces/Design";

@Component({
  selector: "app-courseware",
  templateUrl: "./courseware.component.html",
  styleUrls: ["./courseware.component.css"],
})
export class CoursewareComponent implements OnInit {
  private nextDesignPage = "";
  designs: Design[] = [];
  isLoading = true;

  leftArrowIcon = faCaretLeft;
  rightArrowIcon = faCaretRight;

  constructor(
    private designsService: DesignsService,
    private messagesService: MessagesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.designsService.listAll(this.nextDesignPage).subscribe({
      next: (response: DesignEntity) => {
        this.designs = response.data.map((design) => {
          if (design.pages) return design;

          return {
            pages: [
              [
                {
                  page_index: 0,
                  page_format_id: null,
                },
              ],
            ],
            ...design,
          };
        });

        if (response.hasNextPage) {
          this.nextDesignPage = response.nextCursor;
        } else {
          this.nextDesignPage = "";
        }

        this.isLoading = false;
      },
      error: () => {
        this.messagesService.create(
          "Não foi possível buscar os designs! Por favor, recarregue a página.",
          "error"
        );

        this.isLoading = false;
      },
    });
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  getWeek(): string {
    const initial = new Date(this.designs[this.designs.length - 1].updated_at)
      .toLocaleDateString()
      .slice(0, 5);
    const end = new Date(this.designs[0].updated_at)
      .toLocaleDateString()
      .slice(0, 5);

    if (initial === end) return `Semana ${initial}`;

    return `Semana ${initial} até ${end}`;
  }
}
