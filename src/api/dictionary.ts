import { get } from "./fetch";

const baseUrl = "https://api.dictionaryapi.dev/api/v2";

export function getDictionaryWord(word: string): Promise<Dictionary.Entry[]> {
  return get(`${baseUrl}/entries/en/${word}`);
}
