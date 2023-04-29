import { Injectable, Input } from "@angular/core";

import { Message } from "src/app/interfaces/Message";

@Injectable({
  providedIn: "root",
})
export class MessagesService {
  @Input() type: Message["type"] = "success";
  @Input() text: Message["text"] = "";

  create(text: Message["text"], type?: Message["type"]) {
    this.text = text;
    if (type) this.type = type;

    setTimeout(() => {
      this.clear();
    }, 3000);
  }

  clear() {
    this.text = "";
    setTimeout(() => {
      this.type = "success";
    }, 100);
  }
}
