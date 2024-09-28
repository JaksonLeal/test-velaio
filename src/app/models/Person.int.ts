import { Skill } from "./Skill.int";

export interface Person {
  id: number;
  fullName: string;
  age: number;
  skills: Skill[];
}