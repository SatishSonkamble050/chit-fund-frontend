export const monthConverte = (input)=>{
   let  month1 = input.toLowerCase();
    const months = [
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december"
      ];      
      
month1 = months.indexOf(month1);
return month1+1
}