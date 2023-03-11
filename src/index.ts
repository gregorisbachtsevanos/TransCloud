class Translate {
    language: string;

    constructor(languageCode:string){
        this.language = languageCode
    }
    
     lang(_string: string, _data: string | null){
        let lang_strings
        if(!Boolean(lang_strings[_string])){
            return _string;
        }
        else{
            if(_data == '')
                return lang_strings[_string];
            else {
                return_string = lang_strings[_string];
                if(!is_array(_data)){
                    _data = array(_data);
                }
                i = 1;
                foreach(_data as val){
                    return_string = str_replace('{'.i.'}', val, return_string);
                    i++;
                }
                return return_string;
            }
        }
    }
     

}