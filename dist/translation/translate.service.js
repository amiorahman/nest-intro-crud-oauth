"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationService = void 0;
const common_1 = require("@nestjs/common");
let TranslationService = class TranslationService {
    async translate(input, output) {
        const { Translate } = require('@google-cloud/translate').v2;
        const PROJ_ID = 'dflow-testbed2';
        const FILE_NAME = '/home/amiorahman/Downloads/dflow-testbed2-d3d77e99814d.json';
        const translate = new Translate({
            projectId: PROJ_ID,
            keyFilename: FILE_NAME
        });
        const translation = await translate.translate(input, output);
        return translation;
    }
};
TranslationService = __decorate([
    common_1.Injectable()
], TranslationService);
exports.TranslationService = TranslationService;
//# sourceMappingURL=translate.service.js.map