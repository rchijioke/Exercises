const raisinAlarm = function(cookie) {
  let outputMessage = "";
  // console.log('raisinAlarm: ', cookie);
  for (let i = 0; i < cookie.length; i++) {
    if (cookie.includes("🍇")) {
      outputMessage += "Raisin Alert!";
      return outputMessage;
    } 
    if (cookie.includes("🍫")) {
      outputMessage += "All Good!";
      return outputMessage;
    }
  }
};

// console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
// console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
// console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

const raisinAlarmArray = function(cookies) {
  let outputMessageArray = [];
  let outputMessage = ''
  for (let i = 0; i < cookies.length; i++) {
    outputMessage = raisinAlarm(cookies[i]);
    console.log(outputMessage);
    outputMessageArray.push(outputMessage);
    // if (cookie.includes("🍇")) {
    //   outputMessageArray.push("Raisin Alert!");
    //   return outputMessage;
    // } 
    // if (cookie.includes("🍫")) {
    //   outputMessageArray.push("All Good!");
    //   return outputMessage;
    // }
    
  }
  return outputMessageArray
}
 
console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);