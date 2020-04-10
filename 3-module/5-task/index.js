/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let result = {};
    let arr =  str.split(" ").join().split(",")
                    .map(item => parseFloat(item))
                    .filter(item => isFinite(item))
                    .sort( (a, b) => a - b );
    result.min = arr[0];
    result.max = arr[arr.length - 1];
    return result;
}
