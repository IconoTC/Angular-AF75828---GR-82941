
export type ID = number | string;

export interface Task {
  id: ID;
  title: string;
  owner: string;
  isCompleted: boolean;
}

export type TaskDTO = Omit<Task, 'id'>;

export type TaskUpdateDTO = Omit<Partial<Task>, 'id'>;