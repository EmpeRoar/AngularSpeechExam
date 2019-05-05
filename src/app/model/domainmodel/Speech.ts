import { AuthorInformation  } from './AuthorInformation';

export class Speech {
    Id:string;
    Content:string;
    Author: AuthorInformation;
    Keywords: string[];
    SpeechDate: Date;
}

