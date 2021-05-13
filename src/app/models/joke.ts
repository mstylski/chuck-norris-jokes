export interface Joke {
  type: string;
  value: {
    categories: [];
    id: number;
    joke: string;
  };
  fullName: string;
}

