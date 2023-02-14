import { HomeModel } from "interface";

export interface SearchModel {
  search: string;
  emit: (search_word: string) => void;
}