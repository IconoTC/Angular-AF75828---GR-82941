
export type Gender = 'male' | 'female' | 'other';
export type Country = 'España' | 'Portugal' | 'UK' | 'Francia';

export interface LoginData {
  email: string; // From Input email
  password: string; // From Input password
}

export interface User extends LoginData {
  id: string; // From crypto.uuid
  name: string; // From Input text
  gender: Gender; // From RadioButtons
  country: Country; // From Select
  birthDate: Date; // From DatePicker
  comments: string; // From Textarea
  termsAcceptance: boolean; // From Checkbox
}
