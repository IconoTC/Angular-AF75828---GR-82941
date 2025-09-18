import { Task } from "../models/task";

const TASKS: Task[] = [
  {
    "id": 1,
    "title": "Task 1",
    "owner": "User 1",
    "isCompleted": false
  },
  {
    "id": 2,
    "title": "Task 2",
    "owner": "User 2",
    "isCompleted": true
  }
]

export const getTasks = async (): Promise<Task[]> => {
  return TASKS;
}