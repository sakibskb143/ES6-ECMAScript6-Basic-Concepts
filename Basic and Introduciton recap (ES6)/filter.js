// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.

const numbers = [1,2,3,45,5];
const players = [34,23,54,6,45,53,76,80,66];
// const selected = players.filter(p => p > 70)
// const selected = players.filter(p => p > 80)
const selected = players.filter(p => p > 40)
console.log(selected)


const friends = ['sakib' , 'noha' , 'sourav' ,'bidhan' ,'prio','jerry' ,'Michal'];

const oddFriends = friends.filter(friend => friend.length % 2 != 0);
console.log(oddFriends);