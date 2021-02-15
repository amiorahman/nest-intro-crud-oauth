import { TranslationService } from './translate.service';
export declare class TranslationController {
    private translationService;
    constructor(translationService: TranslationService);
    getTranslation(): Promise<any>;
}
