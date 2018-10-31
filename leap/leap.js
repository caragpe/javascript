export function isLeap(year) {
  let divisibleBy4 = year%4 === 0;
  let divisibleBy100 = year%10 === 0;
  let divisibleBy400 = year%400 === 0;
  
  return divisibleBy400 || (divisibleBy4 && !divisibleBy100)
}