function load():unknown {
    return ' hello world '
};

let hello = load();
// const trimed = hello.trim();//it will crteate error so we use type assertion here

const trimed = (hello as string).trim();