const lang = (string: string, data?: string[] | number[]) => {
    var test = 'this {#1} is {#2} a test {#3}'
    if (data){
        for(let i=0;i<=data.length;i++){
            test = test.replace(`{#${i}}`, data[i-1])
        }
       return  console.log(string, test)

    }
    return console.log(string)
}

lang('hello', [1,5,6])