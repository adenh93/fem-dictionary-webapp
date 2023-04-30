declare namespace Dictionary {
  declare type PartOfSpeech = "verb" | "noun" | "exclamation";

  declare interface Phonetic {
    text: string;
    audio: string;
    sourceUrl?: string;
  }

  declare interface Definition {
    definition: string;
    synonyms: string[];
    antonyms: string[];
    example?: string;
  }

  declare interface Meaning {
    partOfSpeech: PartOfSpeech;
    definitions: Definition[];
    synonyms: string[];
    antonyms: string[];
  }

  declare interface Entry {
    word: string;
    phonetic: string;
    phonetics: Phonetics[];
    meanings: Meaning[];
    sourceUrls: string[];
  }
}
