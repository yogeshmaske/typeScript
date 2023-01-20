export function isPalidrome(str:string):boolean{
    return str === str.split('').reverse().join('');
}