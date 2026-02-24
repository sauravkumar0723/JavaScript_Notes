function x()
{
    var a = 10;
    return function y()
    {
        a++;
        console.log(a);
    }
}
let res = x();
console.log(res);
res();
res();
res();

