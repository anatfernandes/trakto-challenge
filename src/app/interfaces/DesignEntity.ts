import { Design } from "src/app/interfaces/Design";

export interface DesignEntity {
  data: Design[];
  nextCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
