let card = ["apple","orange","banana","Mango","watermelon","lemon","onion","pomegranate","peach"];
const updatecards = () => {
card.forEach((eachcard, index) => {
let random = Math.floor(Math.random() * card.length);
let oldCard = card[index];
card[index] = card[random];
card[random] = oldCard;
})
console.log(card)
}
updatecards();
