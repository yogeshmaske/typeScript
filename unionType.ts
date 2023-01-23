function formatLine(input: string | string[]) {
    
    let line = '';

    if (typeof input === 'string') {
        line = input.trim();
    }else{
        line = input.map(x => x.trim()).join('   ');
    }
    return line;
};

console.log(formatLine('hello '));//hello
console.log(formatLine(['hello ','word']));//helloword
// console.log(formatLine(12345)); // error

export{};