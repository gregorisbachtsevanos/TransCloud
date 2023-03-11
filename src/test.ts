//! class working sample

class Translate {
    
    constructor(){
        
    }
    
    lang(_string: string, data?: string | number){
        console.log(_string)
        
    }
}

let t = new Translate()
t.lang('test123')

//! it's working. need proper structure

const lang = (string: string, data?: string[] | number[]) => {
    const EL = Object.freeze({
        HELLO: "Hello word",
        CLICK: "Click on the Vite and React logos to learn more",
    });
    const EN = Object.freeze({
        HELLO: "Γεία",
        CLICK: "Κάνε κλικ για περισσότερα",
    });
    var test = 'this {#1} is {#2} a test {#3}'
    var l = 'EN'
    const lan = l === 'EL' ? EL : EN
    if (data){
        for(let i=0;i<=data.length;i++){
            test = test.replace(`{#${i}}`, data[i-1])
        }
        console.log(lan.CLICK)
       return  console.log(`${string} ${test}`)

    }
    return console.log(string)
}

lang('hello', [1,5,6])