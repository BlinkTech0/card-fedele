export interface Card {
  id: string;
  name: string;
  number: string;
  categories: string[];
  isFavorite: boolean;
  color: string;
  icon: string;
  clickCount: number;
}