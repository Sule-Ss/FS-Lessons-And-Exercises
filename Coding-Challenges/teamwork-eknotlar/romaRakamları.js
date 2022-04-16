
// function intToRoman(num)
// {

//     let m = ["", "M", "MM", "MMM"];
//     let c = ["", "C", "CC", "CCC", "CD", "D","DC", "DCC", "DCCC", "CM"];
//     let x = ["", "X", "XX", "XXX", "XL", "L","LX", "LXX", "LXXX", "XC"];
//     let i = ["", "I", "II", "III", "IV", "V","VI", "VII", "VIII", "IX"];
         
//     let thousands = m[Math.floor(num/1000)];
//     let hundreds = c[Math.floor((num%1000)/100)];
//     let tens = x[Math.floor((num%100)/10)];
//     let ones = i[num%10];
         
//     let ans = thousands + hundreds + tens + ones;
         
//     return ans;
// }
 
// console.log(intToRoman(3888));


 

// ÇÖZÜM 2


function printRoman(number)
{
    let num = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    let sym = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
    let i=12;
    let ans = [];
    while(number>0)
    {
    let div = Math.floor(number/num[i]);
    number = number%num[i];
    while(div--)
    {
        ans.push(sym[i]);
    }
    i--;
    }
    
    console.log(ans.join(''));
}
 

printRoman(1578);
