export function isLeap(year) {
  let divisibleBy4 = !(year%4);
  let divisibleBy100 = !(year%100);
  let divisibleBy400 = !(year%400);
  
  if(!divisibleBy4) {
    return false;
  } else {
    if(!divisibleBy100) {
      return true;
    } else {
      if(divisibleBy400) {
        return true;
      } else {
        return false;
      }
    }
  }
}