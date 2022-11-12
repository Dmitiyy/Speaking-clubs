import { Timestamp } from "firebase/firestore";
import moment from 'moment-timezone';

// date = doc.data().date
export const convertTime = (date: Timestamp) => {
  return moment.tz(date.toDate(), moment.tz.guess()).format('DD.MM.YYYY|h:mm a').split('|');
}