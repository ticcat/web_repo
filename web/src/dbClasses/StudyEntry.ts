import { ObjectId } from "mongodb";

export default class StudyEntryInfo {
  id: ObjectId;
  title: string;
  subtitle: string;
  duration: string;
  text: string;

  constructor(id: ObjectId, title: string, subtitle: string, duration: string, text: string) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.duration = duration;
    this.text = text;
  }
}