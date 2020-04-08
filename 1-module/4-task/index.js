/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  newStr = str.toLowerCase();
  if(newStr.includes("1xbet") || newStr.includes("xxx")) {
    return true;
  }return false;// ваш код...
}
