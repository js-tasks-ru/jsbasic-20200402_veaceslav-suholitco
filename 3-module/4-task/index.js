/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    // let arr =  data.filter(item => item.age <= age)
    // .map( user => 
    //   `${user.name}, ${user.balance}\n`).join("");
    // return arr;
    let arr = [];
    for (let person of data) {
      if(person.age <= age) {
        arr.push(`${person.name}, ${person.balance}`);
      }
    }
    for (let i = 0; i <= arr.length; i++) {
      if( i < arr.length -1) {
        arr[i] += "\n";
      }
    }
    
    return arr.join("");
}
