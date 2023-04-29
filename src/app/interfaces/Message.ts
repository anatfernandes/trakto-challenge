export interface Message {
  type: "success" | "error" | "warn";
  text: string;
}
