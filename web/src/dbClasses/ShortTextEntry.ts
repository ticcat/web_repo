import { ObjectId } from "mongodb";

export default class ShortTextEntry {
  id: ObjectId;
  type: "studies" | "experience";
  text: string;

  constructor(id: ObjectId, type: "studies" | "experience", text: string) {
    this.id = id;
    this.type = type;
    this.text = text;
  }
}
