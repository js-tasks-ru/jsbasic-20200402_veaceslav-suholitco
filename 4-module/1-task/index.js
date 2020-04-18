/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ul = document.createElement("ul");
    for (let friend of friends) {
        ul.innerHTML += `<li>${friend.firstName} ${friend.lastName}</li>`;
    }
    
    return ul;
}
