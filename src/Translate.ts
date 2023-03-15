
//! class working sample
import { el } from "./lang/el"
import { en } from "./lang/en"

class Translate {
    
    constructor(){
        
    }
    lang = (_string: string, data?: [string | number]) => {
        var value = en[_string as keyof typeof en]
        if (data){
            for(let i = 0; i <= data.length; i++){
                value = value.replace(`{#${i}}`, data[i-1] as any)
            }
        return  console.log(`${value}`)

        }
        return console.log(en[_string as keyof typeof en])
    }
}
export const translate = Translate

// let t = new Translate()
// t.lang('MORE')