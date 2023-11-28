import { ObjectId } from "mongodb";

export default class ShortTextEntry {
  id: ObjectId;
  text: string;

  constructor(id: ObjectId, text: string) {
    this.id = id;
    this.text = text;
  }
}