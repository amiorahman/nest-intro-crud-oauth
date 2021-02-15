import { Injectable } from "@nestjs/common";

@Injectable()
export class TranslationService{
    
    async translate(input: string, output: string){

        const {Translate} = require('@google-cloud/translate').v2;
        const PROJ_ID = 'dflow-testbed2';
        const FILE_NAME = '/home/amiorahman/Downloads/dflow-testbed2-d3d77e99814d.json';
        
        // Instantiates a client
        const translate = new Translate(
            {
                    projectId: PROJ_ID,
                    keyFilename: FILE_NAME
            }
        ); 

        const translation = await translate.translate(input, output);
        
        return translation;
    }
}