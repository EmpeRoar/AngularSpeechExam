import { AuthorInformation  } from './AuthorInformation';

export class Speech {
    Id:number;
    Title:string;
    Content:string;
    Author: AuthorInformation;
    Keywords: string[];
    SpeechDate: Date;
}

