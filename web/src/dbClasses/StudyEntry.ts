import { ObjectId } from "mongodb";

export default class StudyEntryInfo {
  id: ObjectId;
  title: string;
  subtitle: string;
  duration: string;
  bulletPoints: string[];

  constructor(id: ObjectId, title: string, subtitle: string, duration: string, bulletPoints: string[]) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.duration = duration;
    this.bulletPoints = bulletPoints;
  }
}