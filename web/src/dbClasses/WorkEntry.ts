import { ObjectId } from "mongodb";

type Duration = {
  start_date: string,
  end_date: string,
  period: string
}

export default class WorkEntryInfo {
  id: ObjectId;
  title: string;
  role: string;
  duration: Duration
  stack: string[];

  constructor(id:ObjectId, title:string, role:string, duration: Duration, stack:string[]) {
    this.id = id;
    this.title = title;
    this.role = role;
    this.duration = duration;
    this.stack = stack;
  }
}