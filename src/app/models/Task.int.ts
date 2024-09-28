import { Person } from "./Person.int";

export interface Task {
  id: number;
  name: string;
  deadline: Date;
  isCompleted: boolean;
  people: Person[];
}