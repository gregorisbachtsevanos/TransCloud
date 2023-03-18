declare class Translate {
    lang: string;
    constructor(lang: string);
    private getCurrentlyLang;
    log: (_string: string, data?: any) => void;
}
export declare const translate: typeof Translate;
export {};
