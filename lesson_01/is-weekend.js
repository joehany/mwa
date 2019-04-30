function isWeekend() {
  const todayDate = new Date();
  const day = todayDate.getDay();
  
  return day % 6 && 'weekday' || 'weekend'; 
}

console.log(isWeekend());

// https://jsbin.com/cudoyip/edit?js,console
