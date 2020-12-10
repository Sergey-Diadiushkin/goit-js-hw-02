const checkForSpam = function (message) {
  // твой код
  return (
    message.toLowerCase().includes("sale") ||
    message.toLowerCase().includes("spam")
  );
};
// return false;

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
