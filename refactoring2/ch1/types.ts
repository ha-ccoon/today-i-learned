export interface Invoice {
  customer: string;
  performances: Performance[];
}

export interface Performance {
  playID: string;
  audience: number;
}

export type Type = 'tragedy' | 'comedy';

export interface PlayInfo {
  name: string;
  type: Type;
}

export interface Plays extends Record<string, PlayInfo> {}
