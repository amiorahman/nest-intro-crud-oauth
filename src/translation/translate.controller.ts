import { Controller, Post, Get } from '@nestjs/common';
import { TranslationService } from './translate.service';

@Controller('translate')
export class TranslationController {
    constructor(private translationService: TranslationService){}

    @Get()
    async getTranslation(){
        // The text to translate
        const text = 'Good Morning Romania!';    
        // The target language
        const target = 'el';
        // Calling the translation service
        const translatedText = await this.translationService.translate(text, target);

        return translatedText;
    }
}

