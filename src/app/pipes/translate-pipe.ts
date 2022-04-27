import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation/translation.service';

@Pipe({name: 'translate'})
export class TranslatePipe implements PipeTransform {
    translationService: TranslationService;
    constructor(translationService: TranslationService){
        this.translationService = translationService;
    }
    
    transform(value: any) {
        return this.translationService.translate(value);
    }
}