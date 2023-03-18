
import { el } from "./lang/el"
import { en } from "./lang/en"

class Translate {
    lang: string

    constructor(lang: string){
        this.lang = lang
    }

    private getCurrentlyLang(_string: string) {
        let value
        switch (this.lang) {
            case 'el':
                value = el[_string as keyof typeof el]
                break
            case 'en':
                value = en[_string as keyof typeof en]
                break
            default:
                break
        }
        return value
    }
   
    log = (_string: string, data?: any) => {

        let value = this.getCurrentlyLang(_string)

        if (data){
            for(let i = 0; i <= data.length; i++){
                value = value?.replace(`{#${i}}`, data[i-1])
            }

        }
        return console.log(value)
    }

}

export const translate = Translate

// let t = new Translate()
// t.log('MORE')