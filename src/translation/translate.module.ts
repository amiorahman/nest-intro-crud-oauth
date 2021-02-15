import { Module } from '@nestjs/common';
import { TranslationController } from './translate.controller';
import { TranslationService } from './translate.service';

@Module({
    controllers: [TranslationController],
    providers: [TranslationService]
})

export class TranslationModule{}
