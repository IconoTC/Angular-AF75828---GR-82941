
export type ID = number | string;

export interface Note {
  id: ID;
  title: string;
  owner: string;
  isCompleted: boolean;
}

export type NoteDTO = Omit<Note, 'id'>;

export type NoteUpdateDTO = Omit<Partial<Note>, 'id'>;