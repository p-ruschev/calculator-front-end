export interface Expression {
  _id?: string;
  creator?: string[];
  formula: string[];
  input: string[];
  result?: number;
  variables?: string[];
  comment?: string;
  createdAt?: string;
  updatedAt?: string;
}