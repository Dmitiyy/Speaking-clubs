import { Timestamp } from "firebase/firestore";

export type MeetingSchema = {
  title: string;
  description: string;
  questions: Array<string>;
  link: string;
  date: Timestamp;
}