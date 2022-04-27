import { Injectable } from '@angular/core';
import { Langauge } from 'src/app/constants/language';

@Injectable({
  providedIn: 'root'
})

export class TranslationService {

  constructor() { }

  // TODO: Add to config / datastore
  languageMapCowboy: Map<string, string> = new Map<string, string>([
    ["greetings", "howdy"],
    ["good morning", "mornin' partner"],
  ]);

  translate(phrase: string): string {
    switch (this.getClientLanguage()) {
      case Langauge.ENGLISH:
        return phrase;
      case Langauge.COWBOY:
        return this.languageMapCowboy.get(phrase) ?? phrase;
      case Langauge.PIGLATIN:
        return this.getPigLatin(phrase);
      default:
        return phrase;
    }
  }

  private getClientLanguage(): string {
    // TODO: Read from Client config
    return Langauge.COWBOY;
  }

  private getPigLatin(phrase: string) : string {
    let vowels = ["a","e","i","o","u"];
    if (vowels.indexOf(phrase[0]) !== -1)
      return `${phrase}ay`;

    for (let i = 0; i < phrase.length; i++) {
      if (vowels.indexOf(phrase[i]) !== -1) {
        let firstConsonant = phrase.slice(0,i);
        let middle = phrase.slice(i, phrase.length);
        return`${middle}${firstConsonant}ay`
      }
    }

    return phrase;
  }
}
