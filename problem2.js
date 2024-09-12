function sendNotification(email) {
  if (email.indexOf("@") === -1) {
    return "Invalid Email";
  }
  const [username, domain] = email.split("@");
  return username + " " + " sent you an email from " + " " + domain;
}

console.log(sendNotification("zihad@gmail.com")); // zihad sent you an email from gmail.com
console.log(sendNotification("farhan34@yahoo.com")); // farhan34 sent you an email from yahoo.com
console.log(sendNotification("nadim.naem5@outlook.com")); // nadim.naem5 sent you an email from outlook.com
console.log(sendNotification("fahim234.hotmail.com")); // Invalid Email
console.log(sendNotification("sadia8icloud.com")); // Invalid Email
